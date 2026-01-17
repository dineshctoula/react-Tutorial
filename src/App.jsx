import { useState, useTransition } from "react";

function App() {
  const [text, setText] = useState("Click Me");
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    // urgent update
    setText("Processing...");

    // non-urgent update
    startTransition(() => {
      setTimeout(() => {
        setText("Done!");
      }, 2000);
    });
  };

  return (
    <div>
      <h2>useTransition Demo</h2>
      <button disabled={pending} onClick={handleClick}>
        {pending ? "Loading..." : text}
      </button>
    </div>
  );
}

export default App;
