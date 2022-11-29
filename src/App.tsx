import "./App.css";
import Pet from "./components/Pet";

function App() {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Luna" breed="dog" animal="Havanese" />
      <Pet name="Pepper" breed="bird" animal="Cockatiel" />
      <Pet name="Doink" breed="cat" animal="Mixed" />
    </div>
  );
}

export default App;
