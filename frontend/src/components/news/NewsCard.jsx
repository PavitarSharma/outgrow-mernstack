import React from "react";
import "./NewsCard.css"

const NewsCard = ({ data }) => {
  const date = new Date(data?.publishedAt);
  const formattedDate = date.toLocaleDateString();
  return (
    <>
      <div className="article">
        <div className="article_image">
          <img src={data?.urlToImage} alt="news" />
        </div>

        <div className="article_body">
          <h3 className="article_title">{data?.title}</h3>
          <p className="article_description">{data?.description}</p>
          <div className="article_footer">
            <a href={data?.url} target="_blank">
              Read more
            </a>
            <p className="article_publishAt">{formattedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
