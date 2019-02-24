import React from "react"
import Clock from "react-live-clock"

export default () => (
  <div style={{ color: "purple" }}>
    <h1>Hello Gatsby!</h1>
    <p>
      The time is:
      <Clock format={"h:mm:ss"} ticking={true} />
    </p>
    <div>

        <img src="https://picsum.photos/200/300/?random" alt="Random picture" />
    </div>
    <a href="/about/">Go to about page</a>
  </div>
)
