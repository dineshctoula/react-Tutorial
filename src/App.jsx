import { useState } from "react";

import Bio from "./bio";







function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Dinesh Sitoula</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Details
      </button>

      {/* show details conditionally */}
      {show && (
        <p>
          <Bio />
        </p>
      )}
    </div>
  );
}

export default App;
