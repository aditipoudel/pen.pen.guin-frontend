
import { Button } from "bootstrap";
import { Component } from "react";
import {NavLink} from "react-router-dom";

class Usermenu extends Component{

//     logout= (e)=>{
// localStorage.clear()
//     }    

render(){
    if (localStorage.getItem('token')){
var menu = 
<nav>
<NavLink to ="/userDashboard">Home</NavLink>
<NavLink to ="/cart">About Us</NavLink>
<NavLink to ="/login">Product</NavLink>
<NavLink to ="/Product/userViewProduct">Services</NavLink>
{/* <Button onClick={this.logout}>Logout</Button> */}
    </nav>
    }
    else{
var menu = <nav>
<NavLink to ="/">Home</NavLink>
<NavLink to ="/Register">About Us</NavLink>
<NavLink to ="/login"> Product</NavLink>
<NavLink to ="/Product/userViewProduct">Services</NavLink>

</nav>

    }
return(
<header class="header-fixed">

<div class="header-limiter">

<h1><a href="#">pen.pen.guin_🐧</a></h1>

 {menu}


</div>

</header>





)

}

}
export default Usermenu;
