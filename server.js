// server.js (ESM version)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Groq } from 'groq-sdk';

// Must call dotenv before anything else
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post('/api/groq', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            "You are a concise and helpful assistant for Prajwal Thite's portfolio website. Answer questions clearly in 2–3 sentences max. Focus only on the user's question, and avoid repeating the question or adding unnecessary detail",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    res.json({ text: completion.choices[0]?.message?.content || 'No response' });
  } catch (err) {
    console.error('Groq API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Groq proxy server running at http://localhost:${PORT}`);
});
