import { useState } from "react";
import Child from "./Child";

function App(){
  const[count, setCount]=useState(0);
  return(
    <div>
<h1> Dinesh Decodes | React.memo</h1>
<Child  name="Pawan"/>
<h2>Count: {count}</h2>
<button onClick={()=>setCount(count+1)}>Increment</button>

<button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>
  );

}
export default App;