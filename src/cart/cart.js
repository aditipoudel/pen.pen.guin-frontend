import { Component } from 'react';
import Usermenu from '../Header/Usermenu';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class cart extends Component {
  state = {
    myproducts: [],
    total: 0,
  }
  async componentDidMount() {
    const token = localStorage.getItem("token")
    const opts = {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.get("http://localhost:90/user/cart", opts)
    this.setState({
      myproducts: res.data.data
    })
    console.log(this.state.myproducts)
  }

  // delete cart funtion
  removeCart = async (pro_idd) => {
    const res = await axios.delete("http://localhost:90/user/deletecart/" + pro_idd, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })

    // .then()
    // .catch()

  }

  render() {
    return (
      <div>
        <Usermenu />
        <div class="cart-container">
          <h2>My Bookmarks</h2>

          <table className="cartTable">
            <thead>
              <tr>
                <th><strong>Product</strong></th>
                <th><strong>Price</strong></th>
                <th><strong>Image</strong></th>
                <th><strong>Action</strong></th>
               
              </tr>
            </thead>
            <tbody id="carttable">
              {
                this.state.myproducts.map(product => {
                  const price = +product.price.substring(1)
                  this.state.total += price
                  return <tr>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>
                      <img className="cart-img-img" src={"http://localhost:90/" + product.pimage} />
                    </td>
                    <td>
                      <button className="close" onClick={() => this.removeCart(product._id)}>✖</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
      
          <table id="carttotals">
            <tr>
              <td><strong>Items</strong></td>
              <td><strong>Total</strong></td>
            </tr>
            <tr>
              <td> <span id="itemsquantity">{this.state.myproducts.length}</span></td>
              <td> 💸 $<span id="total">{this.state.total}</span></td>
            </tr></table>
          <div class="cart-buttons">

          {/* <NavLink
                     className="button"
                        to="/checkout"
                    >
                     Checkout */}
                    {/* </NavLink> */}
          </div>
        </div>
      </div>


    )
  }

}

export default cart;