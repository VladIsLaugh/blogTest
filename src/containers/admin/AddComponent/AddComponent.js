import React from "react";
import { Button } from "@material-ui/core";


const AddComponent = (props) => {
  return (
    <div>
    
    <br />
      <Button variant="contained" color="secondary" onClick = {()=>props.handleOpen(null, "create")}>
      Add New post    </Button>
 
    </div>
  );
};

export default AddComponent;
