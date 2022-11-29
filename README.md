# Adopt Me

## pure react without JSX, Babel, Webpack, or Parcel just a plain JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Adopt Me</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script>
      // Your code is going to go here
    </script>
  </body>
</html>
```

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// createRoot new React 18 api
root.render(React.createElement(App));
```

## React.createElement() API

React.createElement() creates one instance of some component method takes the three arguments type , props ,children.
type: Type of the html element or component (example : h1,h2,p,button, etc).
props: The properties object (example: {style: { color: “red” }} or className or event handlers etc).
children: anything you need to pass between the dom elements.
