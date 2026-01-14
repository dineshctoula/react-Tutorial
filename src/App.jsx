import User from "./User";
function App(){
   const channelName=(name)=>{
    alert(name);
  };
  return (
    <div>
      <User channelName={channelName} name="dinesh" />
       <User channelName={channelName} name="pawan"/>
        <User channelName={channelName}  name="dipak"/>
         <User channelName={channelName} name="Nira" />
    </div>
  );
}
export default App;