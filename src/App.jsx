// // function App() {
// //   const name = "dinesh";

// //   let a = 10;
// //   let b = 20;

// //   let isLoggedIn = true;


// //   let user={
// //     name:"dinesh",
// //     age:23,
// //   };
// //   // user bhanney chae object ho 


// //   // array 
// //   let fruits=["apple", "banana","orange"];



// //   // js function 
// //   function add(x,y){
// //     return x+y;
// //   }

// //   return (
// //     <div>
// //       <h1> My react App: {name}</h1>
// //       <p>A + B is {a + b}</p>

// //       {/* is logged in bhaneko chae conditional rendering using ternary operator  */}
// //       <p>{isLoggedIn ? "welcome back!" : "please log in"}</p>


// //       <p>{isLoggedIn && "you are logged in" }</p>

// //       <p>{user.name} is {user.age} years old</p>

// //       <p>{fruits[1]} is my favourite fruits </p>



// //       <p>{add(4,6)}</p>

// //       <button onClick={()=>alert("button clicked")}>Click me</button>

// //     </div>
// //   );
// // }

// // export default App;






// function App(){
//   //  function showAlert(){
//   //           alert("hello, dinesh don");
//   //       }

//   const showAlert=(MD)=>{
//     alert("helloo, dinesh don" +MD);
//   };
//   return (
//     <div className="App">
//       <h1> My react App</h1>
//       <p> This is a simple react application.</p>
//       {/* within arrow function parameter pass hunxa  */}
//       <button onClick={()=>showAlert('DS')}> click me !</button>

//       {/* function ko defination lai call gareko xah  */}


//     </div>

//   );
// }
// export default App;
// // onclick, onchange xa bhaney click wala capital hunu parxa 


function App(){
//   function showAlert(){
//     alert("hi");
//   }

const showAlert=()=>{
  alert("hi");
}
  return(
    <div>
      <button onClick={showAlert}> click me !</button>
    </div>
  
  );
}
export default App;