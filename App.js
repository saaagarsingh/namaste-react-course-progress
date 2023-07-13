
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
const element = React.createElement("h1", {className:"looking", style:{color:"red", backgroundColor:"yellow"}, key:"1"}, "Namaste Duniya");
// const heading = React.createElement("h2", { id: "heading", key: "2" }, "Hello World");
const heading = (
    <h2 id="heading" key={"2"}>
        Hello World
    </h2>
)
// line 8-10 is called JSX statement while line 7-11 altogether is called React Element. babel converts it into the line 6
const container = React.createElement("div", {className:"container"}, [element, heading, <Header/>]);
console.log("Sagar");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);