import { useContext } from "react";
import { UserContext } from "../UserContext";

function Child(){
    const{user, setUser}=useContext(UserContext);
    return(
        <div style={{backgroundColor:"purple", padding:"15px"}}>
<h2> Child Component :{user}</h2>
<button onClick={() => setUser("Ram")}>Change User</button>
        </div>
    );
}
export default Child;