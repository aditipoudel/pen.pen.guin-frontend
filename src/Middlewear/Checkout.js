import { Component } from "react";
import Usermenu from "../Header/Usermenu";
import axios from "axios";
import { NavLink } from "react-router-dom";
class checkout extends Component {
  state = {
    orderDate: "",
    returningDate: "",
    fullname: "",
    number: "",
    shippingAddress: "",
    dateCreated: "",
  }
  componentDidMount() {
    // axios.get("http://localhost:90/order")
    //   .then((res) => {

    //     this.setState({
    //       orders: res.data
    //     })
    //   })
  }
  inputOrderText = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })

  }


  checkOut = async (e) => {
    e.preventDefault()
    // alert("order placed")
    const token = localStorage.getItem("token")
    console.log(this.state.fullname, this.state.shippingAddress)
    const con = {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    }

    await axios.post("http://localhost:90/order", {
      orderDate: this.state.orderDate,
      returningDate: this.state.returningDate,
      fullname: this.state.fullname,
      number: this.state.number,
      shippingAddress: this.state.shippingAddress
    }, con)
window.location.href = "/popup"
  }
  render() {
    return (

      <div><Usermenu />
        {/* {this.state.shippingAddress}
      {this.state.fullname} */}

        <form id="myform">
          <h1>Shipping Address</h1>
          <hr />

          <div class="row">
            <input placeholder=" 💃Your name " name="fullname" value={this.state.fullname} onChange={this.inputOrderText}
            />
          </div>
          <div class="row">
            <input placeholder=" 📞 Your number " name="number" onChange={this.inputOrderText} />
          </div>
          <div class="row">
            <input placeholder="🏡 Shipping Address" name="shippingAddress" onChange={this.inputOrderText} />
          </div>
          <div class="area">
            <div class="row">
              <div class="col2">
                <label for="address" >From 🕛</label>
                <input type="date" name="orderDate" onChange={this.inputOrderText} />
              </div>
              <div class="col2">
                <label for="address" >To 🕓</label>
                <input type="date" name="returningDate" onChange={this.inputOrderText} />
              </div>
            </div>
          </div>

          <div class="row">
            <button class="btn">Cancel</button>
            <button class="btn" onClick={this.checkOut}><NavLink className="btn" to="/popup"></NavLink>Rent</button>
          </div>
        </form>

      </div>
    )
  }
}
export default checkout