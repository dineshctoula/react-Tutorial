import { useEffect, useState } from "react";

function App(){
  const[count, setCount]=useState(0);
  const[data, setData]=useState(0);
  useEffect (()=>{
    setCount(count+1);
    setData(data+1);

  }
  ,[]
);


useEffect (()=>{


  }
  ,[count,data]
);





  return (
    <div >
      <h1> Count :{count}</h1>
      <h1>Data: {data}</h1>
     <button onClick={()=>setCount(count+1)}> Increment Count</button>

      <button onClick={()=>setData(data+1)}> Increment Data</button>
    </div>
  );
}
export default App;
