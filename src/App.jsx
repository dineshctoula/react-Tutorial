import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reading values from uncontrolled inputs
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);

    const name=nameRef.current.value;
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
  };
  const handleReset =()=>{
    nameRef.current.value="";
    emailRef.current.value="";
    passwordRef.current.value=""
  }

  return (
    <div className="App">
      <h1>Dinesh Uncontrolled Components</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />
        <br /><br />

        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
        />
        <br /><br />

        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
        />
        <br /><br />

        <button type="submit">Submit</button>

        <br /><br />
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;


// ref is used for uncontrolled components. It helps Dom to access the elements directly 


// const nameRef= ley chae input field ma point garxa 



// event.preventDefault( ) ley chae page lai refresh huna bata stop garxa 


// ref ko through bata chae value access hunxah