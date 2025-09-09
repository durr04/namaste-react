import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", { id: "parent" }, "hello world");
console.log(parent);
const heading = React.createElement("h1", { id: "header" }, "hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

