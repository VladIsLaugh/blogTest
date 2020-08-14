import React from "react";
import "./App.css";
import Home from "./home/Home.js";
import News from "./news/News";
import Admin from "./admin/Admin";
import Layout from "./hoc/layout/Layout"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Switch, Route, NavLink } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Layout>
     <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
         <Home />
        </Route>


      </Switch>
      </Layout>

 
    </div>
  );
};

export default App;
