import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2026-06-28&sortBy=publishedAt&apiKey=615ca18cba26459bb1fb2c5f6bf73784",
    );
    const finalResponse = await response.json();
    setNews(finalResponse.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news);

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index}>
            <img src={item.urlToImage} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
