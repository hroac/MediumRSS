const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/medium', async (req, res) => {
  try {
    const rssUrl = 'https://medium.com/feed/@hraoc';
    const response = await fetch(rssUrl);
    const data = await response.text();
    res.set('Content-Type', 'application/xml');
    res.send(data);
  } catch (error) {
    res.status(500).send('Failed to fetch Medium RSS feed.');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
