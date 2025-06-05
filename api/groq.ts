// api/groq.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Groq } from 'groq-sdk';
import fetch from 'node-fetch';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SITE_URL = 'https://prajwal-portfolio-zeta.vercel.app'; // Replace with your actual deployed URL

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  try {
    const siteRes = await fetch(SITE_URL);
    const html = await siteRes.text();
    const content = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 3000);

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a concise and helpful assistant for Prajwal Thite's portfolio website. Answer questions clearly in 2–3 sentences max. Focus only on the user's question, and avoid repeating the question or adding unnecessary detail. Here is the scraped content: ${content}`,
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
