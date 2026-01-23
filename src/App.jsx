import { useId } from "react";

function App(){
  const nameId=useId();
  const emailId=useId();
  return(
<div>
  <h1> UseId Hook in ReactJs</h1>
  <h1>{nameId}</h1>
  <h2>{emailId}</h2>
  <form >
    <label htmlFor={nameId}>Name:</label>
    <input type="text" id={nameId} name="name"/>
    <br />
    <br />

     <label htmlFor={emailId}>Email:</label>
    <input type="email" id={emailId} name="email"/>


  </form>
</div>
  );
}
export default App;