import { Component } from 'react';
import Adminmenu from '../Header/Adminmenu';
import axios from 'axios';

import busi from '../assets/busi.jpg';



class AdminDashboard extends Component {

  state = {
    orders: [],
    contact: []

  }


  async componentDidMount() {
    const token = localStorage.getItem("token")
    const con = {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }


    const res = await axios.get("http://localhost:90/order", con)
    this.setState({
      orders: res.data.data
    })
    // this.state.orders = res.data.data 
    // console.log(this.state.orders)


    const res1 = await axios.get("http://localhost:90/contact", con)
    this.setState({
      contact: res1.data.data
    })
    console.log(this.state.contact)
  }



  actionConfirm = async (e) => {
    const res = await axios.put("http://localhost:90/order/complete/" + e, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
  }
  // alert("order"+e+ "confirmed")

  actionCancel = async (e) => { // for delete
    const res = await axios.delete("http://localhost:90/order/delete/" + e, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }


    })
  }
  actionCancelorder = async (e) => {
    const res = await axios.put("http://localhost:90/order/cancel/" + e, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }


    })
  }
  deletFeedback = async (e) => { // for delete
    const res = await axios.delete("http://localhost:90/contact/delete/" + e, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }


    })
  }

  render() {
    return (
      <div>
        <Adminmenu />
        {/* <div className="contact-section">
          <div className="wrapper">
            <span className="yo"></span>
            <div className="bubble"></div>
          </div>
          <div className="text">
            <h1>Dear Admin, we are Happy to See you here!</h1>
          </div>

        </div>
        <br />
        <br />
       <h4>Order List</h4>
      <hr/>
        <div className="overflow">
          <table>
            <thead>
              <tr>
                <th>OrderID</th>
                <th >Fullname</th>
                <th>Number</th>
                <th>productName</th>
                <th >Price</th>
                {/* <th >pimage</th> */}
                {/* <th>shippingAddress</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead> */}

            {/* <tbody id="carttable">
              {
                this.state.orders.map(order => {
                  return (
                    <tr>
                      <td >{order._id}</td>
                      <td >{order.fullname}</td>
                      <td >{order.number}</td>
                      <td className="nowrap">
                        {order.order.map(item => {
                          return (
                            <p>{item.productName}</p>
                          )
                        })}
                      </td>
                      <td >
                        {order.order.map(item => {
                          return (
                            <p>{item.price}</p>
                          )
                        })}
                      </td>
                      {/* <td >
                        {order.order.map(item => {
                          return (
                            <p>{item.pimage}</p>
                          )
                        })}
                      </td> */}
                      {/* <td >{order.shippingAddress}</td>
                      <td > {order.status}</td>
                      <button className="close" onClick={() => this.actionConfirm(order._id)}> ✔</button>
                      <button className="close" onClick={() => this.actionCancelorder(order._id)}>✖</button>
                      <button className="close" onClick={() => this.actionCancel(order._id)}>✂</button>

                    </tr>
                  )
                })
              } */}
{/* 
            </tbody>
          </table>
        </div> */} 
         <div className="text">
            <h1>Dear Admin, we are Happy to See you here!</h1>
          </div>
        <img src={busi} className="login" />
        <h3>Clients Feedback</h3>
    
        <div className="overflow">
          <table>
            <thead>
              <tr>      <th >Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="carttable">
              {
                this.state.contact.map(contact => {

                  return <tr>
                    <td>{contact.contactname}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <button className="close" onClick={() => this.deletFeedback(contact._id)}>✂</button>

                  </tr>

                })

              }
            </tbody>
          </table>
        </div>

      </div>

    )
  }
}


export default AdminDashboard;