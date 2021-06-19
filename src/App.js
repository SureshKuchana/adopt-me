import { render } from "react-dom";
import SearchParams from "./components/SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./components/Details";
import "./style.css";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <>
            <Route exact path="/" component={SearchParams} />
            <Route exact path="/details/:id" component={Details} />
          </>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
