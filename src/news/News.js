import React from 'react';
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem"

const News = () =>{
    return(
        <div className={classes.News}>
            NewsPage
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    )
}
export default News


