import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "mango"]);
  const [data, setData] = useState([
    { id: 1, name: "dinesh", age: 22 },
    { id: 2, name: "dipak", age: 23 },
    { id: 3, name: "pawan", age: 24 },
    { id: 4, name: "Nira", age: 25 },
  ]);

  const handleFruits = () => {
    setFruits([...fruits, "orange"]);
  };

  const handleData = () => {
    const newData = data.map((item) =>
      item.id === 1
        ? { ...item, age: item.age + 1 }
        : item
    );
    setData(newData);
  };

  return (
    <div>
      <h1>Updating array in state</h1>

      <h2>My Fruits are:</h2>
      {fruits.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <button onClick={handleFruits}>Add Fruit</button>

      <h2>User Data:</h2>
      {data.map((item) => (
        <p key={item.id}>
          {item.name} - {item.age}
        </p>
      ))}

      <button onClick={handleData}>Increase Age of ID 1</button>
    </div>
  );
}

export default App;
