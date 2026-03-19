export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { topic = 'general' } = req.query;
  const API_KEY = process.env.GNEWS_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?topic=${topic}&lang=hi&country=in&max=10&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
