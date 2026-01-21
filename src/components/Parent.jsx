import Child from "./Child";

function Parent(){
    return(
        <div style={{backgroundColor:"yellow", padding:"20px"}}>
<h2> Parent Component</h2>
  <Child />
        </div>
      
    );
}
export default Parent;