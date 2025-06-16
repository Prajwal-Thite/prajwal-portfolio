// api/groq.js
import { Groq } from 'groq-sdk';
import { portfolioData } from './portfolio-data.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a concise and helpful assistant for Prajwal Thite\'s portfolio website. Use this portfolio data to answer questions accurately: ${JSON.stringify(portfolioData)}. Focus on providing specific, relevant information from the portfolio data.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    res.status(200).json({ text: completion.choices[0]?.message?.content || 'No response' });
  } catch (err) {
    console.error('Groq API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
