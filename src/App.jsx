import User, { Profile, UserName } from "./User";

function App() {
  return (
    <div>
      <h1>Hey</h1>
      <User />
      <Profile />
     <h1>{UserName}</h1>
    </div>
  );
}

export default App;
