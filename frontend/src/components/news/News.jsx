import React, { useState, useEffect } from "react";
import axios from "axios";

const News = ({ news }) => {
  return (
    <div>
      <ul>
        {news.map((article) => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.source}</p>
            <p>{article.publishedAt}</p>
            <a href={article.url}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
