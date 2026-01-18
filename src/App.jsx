import { useCallback, useState } from "react";
import Child from "./Child";

function App(){
  const[count, setCount]=useState(0);
  // const handleClick=()=>{
  //   console.log("child button is clicked");
  // }

  const handleClick=useCallback(()=>{
    console.log("child buttono is clicked");
  },[]);
  return(
<div>
  <h1>useCallBack | Dinesh Decodes</h1>
  <Child onClick={handleClick}/>
  <h2>Result: {count}</h2>
  <button onClick={()=>setCount(count+1)}>Increment</button>
</div>
  );
}
export default App;