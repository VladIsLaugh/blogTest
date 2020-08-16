import React from 'react';
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem"
import Button from '@material-ui/core/Button';

class News extends React.Component{
    state ={
        comments:[
        {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            postId: 1,
            id: 2,
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            postId: 2,
            id: 3,
            name: "odio adipisci rerum aut animi",
            email: "Nikita@garfield.biz",
            body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        ],
        news:[
             {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
        ]
    }
    commentHandler(msg, postId){
        const newComment = {
            postId: Number(postId),
            id: 4,
            name: "rwqe ew",
            email: "Eliseo@gardner.biz",
            body: msg
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })      

    }
    sortByPopularity = ()=>{
        let container = []
        this.state.news.forEach(newPost => {
            let obj = {
                postId:newPost.id,
                count: 0
            }    
            let count =  this.state.comments.filter( comment => comment.postId===obj.postId )
            obj.count = count.length    
         container.push(obj)
        });
        container.sort(function(a, b) { return b.count - a.count; });
        let news = []
        container.forEach(sortedEl => {
             news.push(this.state.news.find(el => el.id===sortedEl.postId )) 
        });
       console.log(news);
       this.setState({
           news:news
       })

    }

    sortByDefault=()=>{
        let news = this.state.news.concat()
        news.sort(function(a, b) { return a.id - b.id; });
        this.setState({
           news:news
       })
    }

    render(){
 return(
        <div className={classes.News}>
            NewsPage
            <Button variant="contained" type="primary" onClick={this.sortByPopularity}>Sort by popular</Button>
            <Button variant="contained" type="primary">Sort by new</Button>
            <Button variant="contained" type="primary" onClick={this.sortByDefault}>Sort by default</Button>

            {
                this.state.news.map((item, index) =>   <NewsItem  state={this.state} {...item} commentHandler={this.commentHandler.bind(this)}/>)
            }
    
        </div>
    )
    }
   
}
export default News


