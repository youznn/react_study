import { useState, useEffect } from "react";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("distroyed :(");
  }, []);
  return <h1>Hello~</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "hide!" : "show!"} </button>
    </div>
  );
}

export default App;
