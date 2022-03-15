import { Component } from "react";
import { NavLink } from "react-router-dom";
import Usermenu from "../Header/Usermenu";
class popup extends Component {
  render() {
    return (
      <div><Usermenu />
        <div className="container">
          <div className="cookiesContent" id="cookiesPopup">
            <button className="close" ><NavLink className="btn" to="/cart">✖</NavLink></button>
            <img className="popimg" src="https://cdn-icons-png.flaticon.com/512/5359/5359958.png" />
            <h5>Your Order has been placed!!</h5>
            <p> Thank you for being an RentITWearIT customer. We sincerely appreciate it and hope you come back soon!</p>
     
          </div>
        </div>
      </div>
    )
  }
}

export default popup;