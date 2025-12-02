import Hobby from "./Hobby";
import User from "./User";
import { useState } from "react";

function App() {
  const [hobby, setHobby] = useState(true);   // FIX: define hobby state

  return (
    <div>
      {hobby && <Hobby name={hobby} />}

      <button onClick={()=>setHobby(cricket)}>Display Hobby</button>
    </div>
  );
}

export default App;
