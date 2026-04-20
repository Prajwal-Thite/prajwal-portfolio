// api/groq.js
import { Groq } from 'groq-sdk';
import { portfolioData } from './portfolio-data.js';
import { pushToLoki } from './lib/loki.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  const userAgent = req.headers['user-agent'] || 'unknown';

  try {
    const start = Date.now();
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are "Portfolio Bot", a sharp and friendly AI assistant built into Prajwal Thite's portfolio. Your job is to answer questions about Prajwal's skills, experience, projects, and background. Use this portfolio data to answer accurately: ${JSON.stringify(portfolioData)}. Always refer to Prajwal by name (e.g. "Prajwal has..." or "Prajwal worked on...") — never use "I" or "me" as if you are Prajwal. Keep all responses short and to the point — 2 to 4 sentences max. No long paragraphs. If asked something unrelated to the portfolio, politely redirect the conversation back to Prajwal's work.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    });
    const responseTime = Date.now() - start;

    const answer = completion.choices[0]?.message?.content || 'No response';

    await pushToLoki({ level: 'info', question: prompt, answer, user_agent: userAgent, response_time_ms: responseTime }).catch((err) => console.error('Loki log error:', err));

    res.status(200).json({ text: answer });
  } catch (err) {
    console.error('Groq API error:', err);
    pushToLoki({ level: 'error', question: prompt, error: err.message, error_type: err.name, user_agent: userAgent }).catch(() => {});
    res.status(500).json({ error: 'Internal server error' });
  }
}
