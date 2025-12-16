import { useState } from "react";

function App(){
  const [selected, setSelected] = useState({
    html:false,
    css:false,
    js:false,
  });

  const htmlChecked = (e) => {
    setSelected({...selected, html: e.target.checked});
  };

  const cssChecked = (e) => {
    setSelected({...selected, css: e.target.checked});
  };

  const jsChecked = (e) => {
    setSelected({...selected, js: e.target.checked});
  };

  return (
    <div>
      <h1>Dinesh Checkbox</h1>

      <label>
        <input
          type="checkbox"
          checked={selected.html}
          onChange={htmlChecked}
        />
        HTML
      </label>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={selected.css}
          onChange={cssChecked}
        />
        CSS
      </label>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={selected.js}
          onChange={jsChecked}
        />
        JS
      </label>

      <br /><br />

      <button onClick={() => setSelected({ html:false, css:false, js:false })}>
        Clear Selection
      </button>

      <h2>Selected Skills:</h2>

      <ul>
        {selected.html && <li>HTML</li>}
        {selected.css && <li>CSS</li>}
        {selected.js && <li>JS</li>}
      </ul>
    </div>
  );
}

export default App;
