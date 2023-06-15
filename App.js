const element = React.createElement("h1", {class:"looking", style:{color:"red", backgroundColor:"yellow"}}, "Namaste Duniya");
const heading = React.createElement("h2", {id:"heading"}, "Hello World");
const container = React.createElement("div", {class:"container"}, [element, heading]);
console.log(element);
ReactDOM.render(container, document.getElementById("root"));