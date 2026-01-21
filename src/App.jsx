import Parent from "./components/Parent";
import { UserProvider } from "./UserContext";

function App(){
  return(
    <div style={{backgroundColor:"green", padding:"20px"}}>
<h1> APP component</h1>
<UserProvider>
  <Parent />
</UserProvider>

    </div>
  );
}
export default App;
