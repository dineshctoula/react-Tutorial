import { useMemo } from "react";

function DerivedState({riceQuantity , price})
// pass gareko lai receive garyo 
{
const totalPrice=useMemo(()=>{
    // usememo ley chae unncecessary rendering lai prevent garxa 
    return riceQuantity*price;
    // it calculates total price 
}
,[riceQuantity,price]
);
    return(
        <div>
            <h1> Derived State in React | Dinesh Decodes</h1>
            <p> Rice Total Price:{totalPrice}</p>
        </div>
    );
}
export default DerivedState;