import User from "./User";
function App()
{
  return (
    <div className="App">
      <h1> welcome to React</h1>
      <p> this is a simple react application.</p>
      {abc()}
      <UserOne />
      <User />
      
      
    </div>
  )
}


function UserOne(){
  return (
    <div>
      <h1> Users</h1>
      <p>DINESH </p>
    </div>
  )
}


function abc(){
  return (
    <div>
      <h1> abc</h1>
      <p>pawan </p>
    </div>
  )
}





export default App;