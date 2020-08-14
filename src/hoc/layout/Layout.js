import React from "react";
import classes from "./Layout.module.css"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const Layout = (props) => {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
        
         <NavLink to="/">
            <Button >Home</Button>
          </NavLink>

          <NavLink to="/news">
            <Button>News</Button>
          </NavLink>
          
          <NavLink to="/admin">
            <Button>Admin</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    {props.children} 
    </div>
  );
};

export default Layout;

