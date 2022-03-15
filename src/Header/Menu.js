
import { Component } from "react";
import {NavLink} from "react-router-dom";

class Menu extends Component{

render(){
return(
<header class="header-fixed">

<div class="header-limiter">

<h1><a href="#">pen.pen.guin_🐧</a></h1>
    <nav>
    <NavLink to ="/">Home</NavLink>
<NavLink to ="/Register">About us</NavLink>
<NavLink to ="/login"> Products</NavLink>
<NavLink to ="/Product/userViewProduct">Services</NavLink>



{/* <NavLink to="/update">Update</NavLink>
<NavLink to ="/InsertProduct">Insert</NavLink>
<NavLink to ="/Product">AdminProduct</NavLink>
    */}
    </nav>

</div>

</header>

//     <div className="menu">


// </div>



)

}

}
export default Menu;
