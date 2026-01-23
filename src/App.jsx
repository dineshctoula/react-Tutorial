import { useState, useOptimistic } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (prevTodos, newTodo) => [...prevTodos, newTodo]
  );

  async function handleAddTodos(formData) {
    const newTodo = formData.get("task");

    if (!newTodo) return;

    // 1️⃣ Optimistic update (UI updates immediately)
    addOptimisticTodo(newTodo);

    // 2️⃣ Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3️⃣ Actual state update
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div>
      <h1>Optimistic UI Update | Dinesh Decodes</h1>

      <form action={handleAddTodos}>
        <input type="text" name="task" placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
