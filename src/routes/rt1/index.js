function GET(req, res) {
  res.json({ text: 'some get' });
}

function OPTIONS(req, res) {
  res.json({ text: 'some options' });
}

function POST(req, res) {
  res.json({ text: 'some post' });
}

export { GET, OPTIONS, POST };
