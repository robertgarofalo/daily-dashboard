import React, { useState, useEffect } from 'react'
import './News.css';

function News() {

    const apiKey = '2ace9819edc14bc3be6cb1fcb582c738';
    const url = `http://newsapi.org/v2/everything?domains=wsj.com&language=en&pageSize=4&page=4&apiKey=${apiKey}`;
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then((result) => {
            console.log(result);
            setItems(result);
              setIsLoaded(true);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
//   FUNCTIONS
//Convert Date 
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return (

        <div className='news-component'>

            <div className='news-heading'>
            <h1>News</h1>
            <p>Latest Headlines</p>
            </div>

            <div className="news-articles">
                    <ul>
                        {items.articles.map(article =>(
                            <a href={article.url} target="_blank">
                            <div className="news-article">
                                <img src={article.urlToImage} />
                                    <div className="article-text">
                                        <li className="article-title">{article.title}</li>
                                        <li className="article-meta">{article.author ? `${article.author} | ` : `${article.source.name} | ` }  <span>{formatDate(article.publishedAt)}</span></li>
                                    </div>
                            </div>  
                            </a>        
                        ))}
                    </ul>

            </div>
            <div className="more-option">
                <h3>More</h3>
            </div>
        </div>
    );
    }

}
export default News
