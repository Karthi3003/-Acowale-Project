import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="card my-3">
      <img src={article.image} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default NewsCard;
