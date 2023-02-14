import mongoose from "mongoose";
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  description: String,
  url: String,
  imageUrl: String,
  source: String,
  publishedAt: Date,
});

const News = mongoose.model("News", newsSchema);

export default News;
