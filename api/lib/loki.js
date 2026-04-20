export async function pushToLoki(payload) {
  const lokiUrl = process.env.LOKI_URL;
  const lokiUser = process.env.LOKI_USER;
  const lokiApiKey = process.env.LOKI_API_KEY;

  if (!lokiUrl || !lokiUser || !lokiApiKey) return;

  const token = Buffer.from(`${lokiUser}:${lokiApiKey}`).toString('base64');
  const timestampNs = (BigInt(Date.now()) * 1000000n).toString();

  const res = await fetch(`${lokiUrl}/loki/api/v1/push`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,
    },
    body: JSON.stringify({
      streams: [{
        stream: { service: 'portfolio-chatbot', level: payload.level || 'info' },
        values: [[timestampNs, JSON.stringify(payload)]],
      }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Loki push failed: ${res.status} ${text}`);
  }
}
