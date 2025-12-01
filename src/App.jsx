import Hobby from "./Hobby";

function App(){
  let hobbys=["reading","gaming","coding"]
  return (
    <div className="App">
      <h1> My React App</h1>
      <p> This is a simple react application</p>
      <Hobby hobby={hobbys} />
    </div>
  );
}
export default App; 