import React from 'react';
import '../article/article.css';
import '../../App.css'

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p><a href="https://splintgateblogs.blogspot.com/">Read Full Article</a></p>
    </div>
  </div>
);

export default Article;
