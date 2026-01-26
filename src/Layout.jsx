import { Children } from "react";

function Layout({Children}){
    return(
<div>
    <h2> This is layout</h2>
    <h3> Layout component</h3>
    {Children}
</div>
    );
}
export default Layout;