import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  const[country, setCountry]=useState("India");

  return (
    <div>
      <h1>Radio button and select dropdown</h1>
      <h2>Select Gender</h2>

      <div>
        <label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="other"
            name="gender"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
      </div>

      <h3>Selected Gender: {gender}</h3>
      <div>
        <h1>Select DropDown Coountry</h1>
        <select value={country} onChange={(e)=> setCountry(e.target.value)}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
      <h1>Selected Country:{country}</h1>
    </div>
  
  );
}

export default App;
