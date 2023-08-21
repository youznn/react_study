import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [toDo, setToDo] = useState(""); //state
  const [toDos, setToDos] = useState([]); //empty array
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // ...array -> add previous array's elements
    setToDo("");
  };
  return (
    <div>
      <h1>MY TO DOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text "
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}{" "}
      </ul>
    </div>
  );
}

export default App;
