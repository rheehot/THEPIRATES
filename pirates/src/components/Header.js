import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";

const Header = () => (
  <BrowserRouter>
    <div>
      <Link to="/">LoGo</Link>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);
export default Header;
