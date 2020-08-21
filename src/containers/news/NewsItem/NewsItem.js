import React from 'react';
import classes from "./NewsItem.module.css";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import NewsItemComment from './NewsItemComment/NewsItemComment'
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';


export default function NewsItem(props) {
  const [expanded, setExpanded] = React.useState(false);
   let comment = React.createRef();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const send=()=>{
    props.commentHandler(comment.current.value, props.id)
    comment.current.value = ''
  }

  return (
    <Card className={classes.NewsItem}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }

        title={props.title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ChatIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

{
  props.state.comments.filter((item, index) => item.postId === props.id).map((item,index)=>   <NewsItemComment {...item} />)
}
        <textarea placeholder="Empty" className={classes.textarea} ref={comment} />
        <Button onClick={() => send()}>  
          <SendIcon /> 
        </Button>

        </CardContent>
      </Collapse>
      <hr />
    </Card>
  );
}