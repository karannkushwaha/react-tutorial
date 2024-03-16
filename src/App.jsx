import { useState } from "react";
import { Button } from "react-bootstrap";
import Fragments from "./components/Fragments";

function App() {
  const [count, setCount] = useState(0);
  let myName = "Karan Kushwaha";
  return (
    <>
      <h1>{myName}</h1>
      <div className="card">
        <Button
          variant="warning"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>

      <Fragments />
    </>
  );
}

export default App;
