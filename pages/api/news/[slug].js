const {news} = require("./data.json");

export default function handler(req, res) {
     const oneNews = news.filter((item) => item.slug === req.query.slug);
     res.status(200).json(oneNews);
  }
  