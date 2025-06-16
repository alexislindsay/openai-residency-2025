export default function handler(req, res) {
  const { password } = req.body;
  const SECRET = process.env.GLYPHGATE_SECRET;

  if (req.method === 'POST') {
    if (password === SECRET) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
}
