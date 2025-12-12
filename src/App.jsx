import { useState } from "react";

function App() {
  const [name, setName]=useState("");

  // name haru chae state variable ho 
  //  setname chae function jasle value update garxa 


  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);

  }
  const handleClear =()=>{
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    // controlled component
    <div>
      <h1>Controlled component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" Value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" />
        <br />
        <br />

        <input type="email" Value={email}   onChange={(e)=>setEmail(e.target.value)}  placeholder="enter your email" />
        {/* mathe state variable lekheko ho value ma  */}
        <br />
        <br />
        <input type="password" Value={password}
         onChange={(e)=>setPassword(e.target.value)} 
        placeholder="enter your password" />
        <br />
        <br />
        <button type="submit"> Submit</button>
        <br />
        <br />
        <button type="reset"onClick={handleClear}>Clear</button>
        <p>live value:{name}:{email}:{password}</p>
      </form>
    </div>
  );
}
export default App;
