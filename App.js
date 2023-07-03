
import React from "react";
import ReactDOM from "react-dom";
        
const element = React.createElement("h1", {className:"looking", style:{color:"red", backgroundColor:"yellow"}, key:"1"}, "Namaste Duniya");
const heading = React.createElement("h2", {id:"heading", key:"2"}, "Hello World");
const container = React.createElement("div", {className:"container"}, [element, heading]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);