import React from "react";
import {Input, Button } from "@material-ui/core";


const AddComponent = (props) => {
  return (
    <div>
    Add New post
    <br />
      <Button variant="contained" color="secondary" onClick = {()=>props.handleOpen(null, "create")}>
+      </Button>
 
    </div>
  );
};

export default AddComponent;
