import React from "react";
function Child(onClick){
    console.log("child component is rendered");
    return(
        <div>
<h2> Child component :</h2>
<p> This is the child component</p>
<button onClick={onClick}>Click me hae</button>
        </div>

    );
}
export default React.memo(Child);


