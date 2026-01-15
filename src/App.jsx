import { useRef } from "react";
import User from "./User";

function App(){
  const inputRef=useRef();
  const handleFocus=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="green";
    inputRef.current.value="hey";
    }
  return(
    <div>
<h1>Forward Ref in React19</h1>
<User />
<br />
<br />
<button onClick={handleFocus}>Focus Input </button>

    </div>
  );
}
export default App;