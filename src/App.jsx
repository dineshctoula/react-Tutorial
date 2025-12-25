import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello world");

    // cleanup function
    return () => {
      console.log("goodbye world");
    };
  }, []); // empty dependency array

  return (
    <div>
      <h1>Welcome to React</h1>
      <p>Learn React</p>
    </div>
  );
}

export default App;
