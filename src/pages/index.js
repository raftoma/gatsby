import React from "react";
import { Link } from "gatsby";
import Clock from "../components/Clock.js";
import Menu from "../components/menu";
import "../css/style.css";

export default () => (
    <div className="container">
    <Menu />
    <h1>Hello Gatsby!</h1>
    <div className="clock"><Clock format={"HH:mm:ss"} ticking={true} interval={1000} /></div>
    <div className="copyrights">Photo by Miguel Á. Padriñán from Pexels</div>
  </div>
)
