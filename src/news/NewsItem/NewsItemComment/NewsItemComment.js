import React from 'react';
import classes from './NewsItemComment.module.css'



export default function NewsItem(props) {


  return (
    <div className={classes.Comment}>
       <div className={classes.Title}> 
       <span className={classes.Name}> {props.name} </span>
       <span className={classes.Email}>  {props.email} </span>
       
</div >
       <p   className={classes.Body}> {props.body} 
       </p>
       <hr />
    </div>
  );
}