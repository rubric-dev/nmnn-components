import "./App.css";
import { Button } from "nmnn-components";

function App() {
  return (
    <div className="App">
      <Button type="button" onClick={() => console.log("clicked")}>
        Click Here!
      </Button>
    </div>
  );
}

export default App;
