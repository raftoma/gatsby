import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Menu from "../components/menu";

export default () => (
  <div class="container">
    <Menu />
    <Header headerText="Contact" />
    <h2>Rafael Tomaszewski</h2>
    <p><a href="mailto:r.tomaszewski@live.com">r.tomaszewski@live.com</a></p>
  </div>
)
