const title = React.createElement("h1", null, "Hello React!");
const message = React.createElement("h3", null, "Things I Need To Do:");
const items = ["Learn React", "Climb Mt. Rainier", "Feed the dogs"];
const list = React.createElement("ul", null, items.map((item, index) => 
    React.createElement("li", {key: index}, `${item}`)
));
const app = React.createElement("div", null, title, message, list);

ReactDOM.render(app, document.getElementById("app"));