import NewsCard from "./NewsCard";
import "./News.css";
const News = ({ news }) => {
  return (
    <>
      <div className="news_grid">
        {news.length > 0 ? (
          news.map((article) => <NewsCard key={article._id} data={article} />)
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
};

export default News;
