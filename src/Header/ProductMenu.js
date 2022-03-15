
import { Component } from "react";
import {NavLink} from "react-router-dom";

class ProductMenu extends Component{

render(){
return(
<header class="header-fixed">

<div class="header-limiter">

<h1><a href="#">pen.pen.guin_🐧</a></h1>


    <nav>

<NavLink to ="/adminDashboard">Dashboard</NavLink>
 
<NavLink to ="/Home"> Logout</NavLink>


    </nav>

</div>

</header>


)

}

}
export default ProductMenu;
