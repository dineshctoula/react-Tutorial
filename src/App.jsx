import { Button } from "@mui/material";
import { Alert } from "@mui/material";
function App(){
  return (
    <div>
     <h1> MUI</h1>
     <Button variant= "contained" color="success">Dinesh Decodes</Button>


     <Alert severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>
    </div>
  );
}
export default App;

