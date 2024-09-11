import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({ news }) => {
  return (
    <div className="row">
      {news.map((article, index) => (
        <div className="col-md-4" key={index}>
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
