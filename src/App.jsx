import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function App() {
  const [msg, setMsg] = useState("");


  // setMsg is passed to the ChildA
  // and msg is passed to the ChildB 
  // state lifting bhaneko chae euta child ko data change huda arko ma ne change hunxa

  return (
    <div>
      <h1>State lifting in React</h1>
      <ChildA setMsg={setMsg} />
      <ChildB msg={msg} />
    </div>
  );
}

export default App;
