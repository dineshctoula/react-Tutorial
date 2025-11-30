import { useState } from "react";

function App() {

  const [name, setName] = useState("dinesh sitoula");
  const [count, setCount] = useState(0);

  


  const nameChange = () => {
    setName("pawan sitoula");
  };

  return (
    <div className="App">
      <h1>Name: {name}</h1>
      <h1>Count: {count}</h1>

      <div>
        {/* increment button */}
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        {/* decrement button */}
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        {/* reset button */}
        <button onClick={() => setCount(0)}>
          Reset
        </button>

        {/* name change button */}
        <button onClick={nameChange}>
          Name change Button
        </button>


      </div>
    </div>
  );
}

export default App;
