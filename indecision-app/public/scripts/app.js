console.log('App.js is running!')

// JSX - JavaScript XML (Provided via React)

// var template = <p>This is JSX from app.js</p> 

var template = /*#__PURE__*/React.createElement(
  "p",
  null,
  "This is JSX from app.js"
); // babel compiled

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)