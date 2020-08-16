import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from "@material-ui/core";


export default function NewsPreviewItem(props) {
  const editClickHandler = (id) => {
    
  }
  const deleteClickHandler = (id) => {
     props.handleOpen(id)
  }
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
           {props.personalInfo.avatar}
          </Avatar>
        }
        action={
          <div >
            {/* <MoreVertIcon /> */}
            <Button variant="contained" color="primary" onClick = { ()=>props.handleOpen(props.personalInfo.id, "edit") }> edit </Button>
            <Button variant="contained" color="secondary" onClick = {()=>props.handleOpen(props.personalInfo.id, "delete")}> delete </Button>

             </div>
            // <Button> delete </Button>

         
        }
        title={props.personalInfo.name}
        subheader={props.personalInfo.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.personalInfo.msg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        
      </CardActions>
     
    </Card>
  );
}