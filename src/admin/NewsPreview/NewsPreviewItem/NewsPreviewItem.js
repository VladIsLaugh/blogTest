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
  const editClickHandler = () => {
    alert("edit")
  }
  const deleteClickHandler = () => {
    alert("delete")
  }
  console.log(props.personalInfo.name);
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
            <Button variant="contained" color="primary" onClick = {editClickHandler}> edit </Button>
            <Button variant="contained" color="secondary" onClick = {deleteClickHandler}> delete </Button>

             </div>
            // <Button> delete </Button>

         
        }
        title={props.personalInfo.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        
      </CardActions>
     
    </Card>
  );
}