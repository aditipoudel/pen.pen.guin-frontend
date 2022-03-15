
import { Component } from "react";
import {NavLink} from "react-router-dom";

class Adminmenu extends Component{

render(){
return(
<header className="header-fixed">

<div className="header-limiter">

<h1><a href="#">pen.pen.guin_🐧</a></h1>

    <nav>
    <NavLink to ="/login">Home</NavLink>
<NavLink to ="/Product">Product</NavLink>
<NavLink to ="/InsertProduct">Insert</NavLink>
<NavLink to ="/InsertProduct">Services</NavLink>



{/* <NavLink to "/">View User</NavLink> */}
   
    </nav>

</div>

</header>





)

}

}
export default Adminmenu;
