

module.exports = async (req, res) => {
  try {
    const rssUrl = 'https://medium.com/feed/@hraoc';
    const response = await fetch(rssUrl);
    const xml = await response.text();

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (error) {
    console.error('Error fetching RSS:', error);
    res.status(500).send('Failed to fetch Medium RSS feed.');
  }
};
