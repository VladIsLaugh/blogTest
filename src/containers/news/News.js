import React from "react";
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class News extends React.Component {
  state = {
    comments: [],
    news: [],
    loading: true,
  };
  commentHandler(msg, postId) {
    const newComment = {
      postId: Number(postId),
      id: 4,
      name: "rwqe ew",
      email: "Eliseo@gardner.biz",  
      body: msg,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  }

  sortByPopularity = () => {
    let container = [];
    this.state.news.forEach((newPost) => {
      let obj = {
        postId: newPost.id,
        count: 0,
      };
      let count = this.state.comments.filter(
        (comment) => comment.postId === obj.postId
      );
      obj.count = count.length;
      container.push(obj);
    });
    container.sort(function (a, b) {
      return b.count - a.count;
    });
    let news = [];
    container.forEach((sortedEl) => {
      news.push(this.state.news.find((el) => el.id === sortedEl.postId));
    });
    console.log(news);
    this.setState({
      news: news,
    });
  };

  sortByDefault = () => {
    let news = this.state.news.concat();
    news.sort(function (a, b) {
      return a.id - b.id;
    });
    this.setState({
      news: news,
    });
  };

  componentDidMount = () => {
    let posts;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        // handle success
        posts = response.data;
      });
    axios
      .get(" https://jsonplaceholder.typicode.com/comments/")
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({
          comments: response.data,
          news: posts,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div className={classes.News}>
        {this.state.loading ? (
          <div className={classes.Loader}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <Button
              variant="contained"
              type="primary"
              onClick={this.sortByPopularity}
            >
              Sort by popular
            </Button>
            <Button
              variant="contained"
              type="primary"
              onClick={this.sortByDefault}
            >
              Sort by default
            </Button>

            {this.state.news.map((item, index) => (
              <NewsItem
              key={index}
                state={this.state}
                {...item}
                commentHandler={this.commentHandler.bind(this)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default News;
