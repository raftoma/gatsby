import React from "react";
import { Link } from "gatsby";
import Clock from "react-live-clock";
import Menu from "../components/menu";
import "../css/style.css";

export default () => (
    <div class="container">
    <Menu />
    <h1>Hello Gatsby!</h1>
    <div class="clock"><Clock format={"HH:mm:ss"} ticking={true} interval={1000} /></div>
    <div class="copyrights">Photo by Miguel Á. Padriñán from Pexels</div>
  </div>
)
