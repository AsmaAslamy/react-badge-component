import "./App.css";
import Badge from "./components/Badge";

function App() {
  return (
    <div className="pageBadge">
      <h1>Reusable Badge Component</h1>

      <Badge label="Name" value="Asma"></Badge>
      <Badge label="Course" value="React"></Badge>
      <Badge label="Week" value="1"></Badge>
      <Badge label="Topic" value="Props"></Badge>
    </div>
  );
}

export default App;
