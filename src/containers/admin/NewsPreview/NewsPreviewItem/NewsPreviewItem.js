import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";


export default function NewsPreviewItem(props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
           R
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
        title={props.personalInfo.title}
        // subheader={props.personalInfo.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.personalInfo.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      </CardActions>
     
    </Card>
  );
}