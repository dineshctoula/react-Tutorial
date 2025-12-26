import { useState } from "react";
import Count from "./Count";
function App(){
  const[count, setCount]=useState(0);
  const[data, setData]=useState(0);
  return (
    <div>
      <h1> Parent Component</h1>
      <Count count={count} data ={data} />
      <button onClick={()=> setCount(count+1)}>
        Count: 
      </button>

       <button onClick={()=> setData(data+1)}>
        Data: 
      </button>
    </div>
  );
}
export default App; 