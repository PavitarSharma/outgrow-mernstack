import News from "../models/news.model.js";
import axios from "axios";

// Fetch news from News API once per day
const fetchNews = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      // params: {
      //   q: 'tesla',
      //   from: '2023-01-14',
      //   sortBy: 'publishedAt',
      //   apiKey: "ad7f70dd8c1e4418b9f41f9fdcfc203b"
      // },
      params: {
        country: "us",
        apiKey: "ad7f70dd8c1e4418b9f41f9fdcfc203b",
      },
    });

    const news = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      source: article.source.name,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
    }));

    await News.deleteMany(); // Clear out previous day's news
    await News.insertMany(news); // Save today's news
    console.log(`Fetched and saved ${news.length} news articles`);
  } catch (err) {
    console.error(`Error fetching and saving news articles: ${err.message}`);
  }
};

fetchNews(); // Fetch news immediately upon starting the server
setInterval(fetchNews, 24 * 60 * 60 * 1000); // Fetch news once per day

export const getAllNews = async (req, res) => {
  try {
    const query = {};
    if (req.query.q) {
      query.$or = [
        { title: new RegExp(req.query.q, "i") },
        { description: new RegExp(req.query.q, "i") },
        { content: new RegExp(req.query.q, "i") },
      ];
    }
    if (req.query.sources) {
      query.source = { $in: req.query.sources.split(",") };
    }

    // const perPage = 10;
    // const page = Math.max(0, parseInt(req.query.page) || 0);
    const news = await News.find(query)
      // .sort("-publishedAt")
      // .skip(perPage * page)
      // .limit(perPage);

    res.json({
      news,
    });
  } catch (err) {
    console.error(`Error fetching news: ${err.message}`);
    res.status(500).json({ error: "Error fetching news" });
  }
};
