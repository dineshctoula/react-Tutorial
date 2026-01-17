import React from "react";
function Child({name}){
    return(
        <div>
<h2> Child component :{name}</h2>
<p> This is the child component</p>
        </div>

    );
}
export default React.memo(Child);


