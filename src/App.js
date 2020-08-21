import React from "react";
import "./App.css";
import Home from "./containers/home/Home.js";
import News from "./containers/news/News";
import Admin from "./containers/admin/Admin";
import Layout from "./hoc/layout/Layout";
import { Switch, Route } from "react-router-dom";
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
