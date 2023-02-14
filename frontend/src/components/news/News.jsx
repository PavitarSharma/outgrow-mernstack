import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./News.css";
const News = ({ news }) => {
  // console.log(news);
  return (
    <>
      {news.length > 0 ? (
        <div className="news_grid">
          {news.map((article) => (
            <NewsCard key={article._id} data={article} />
          ))}
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
    </>
  );
};

export default News;
