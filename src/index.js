import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import Hello from "./app.js"
import Count from "./attach.js"


const root = ReactDOM.createRoot(document.getElementById("app"))

const main = (
  <div>
    <Hello />
    <div>
      <Count />
    </div>
  </div>
)

root.render(main)
