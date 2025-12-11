import { useState } from "react";

function App(){
  const [name, setName]=useState("");
  const HandelChange= (e)=>{
    setName(e.target.value);
  }
  return (
    <div>
      <h2>Dinesh Coding Example </h2>
      <input type="text" value={name}
      onChange={HandelChange}
      
      placeholder="Enter your name"/>
      <button onClick={()=>setName("")}>Clear</button>
      <p>Live Preview : {name}</p>
    </div>
  );
}
export default App;