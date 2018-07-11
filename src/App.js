import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import NewsApi from "./components/NewsApi";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">NewsApi</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/NewsApi">New Api</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/NewsApi" component={NewsApi}/>  
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;