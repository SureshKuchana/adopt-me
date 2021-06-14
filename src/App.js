import { render } from "react-dom";
import SearchParams from "./components/SearchParams";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
