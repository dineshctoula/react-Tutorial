function App() {
  const name = "dinesh";

  let a = 10;
  let b = 20;

  let isLoggedIn = true;


  let user={
    name:"dinesh",
    age:23,
  };
  // user bhanney chae object ho 


  // array 
  let fruits=["apple", "banana","orange"];



  // js function 
  function add(x,y){
    return x+y;
  }

  return (
    <div>
      <h1> My react App: {name}</h1>
      <p>A + B is {a + b}</p>

      {/* is logged in bhaneko chae conditional rendering using ternary operator  */}
      <p>{isLoggedIn ? "welcome back!" : "please log in"}</p>


      <p>{isLoggedIn && "you are logged in" }</p>

      <p>{user.name} is {user.age} years old</p>

      <p>{fruits[1]} is my favourite fruits </p>



      <p>{add(4,6)}</p>

      <button onClick={()=>alert("button clicked")}>Click me</button>

    </div>
  );
}

export default App;
