function User({channelName,name}){
  
 

  return(
    <div>
      <button onClick={()=>channelName(name)}>Subscribe</button>
    </div>
  );
}
export default User;