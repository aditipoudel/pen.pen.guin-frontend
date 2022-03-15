import { Component } from "react";
import axios from "axios";

import Adminmenu from "../Header/Adminmenu";
class AdminviewProduct extends Component {

  state = {
    product: {},
    myproducts: [],
    id: this.props.match.params.id,
    comments: [],
    newComment: "",

   // added here for try
  }


  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();

  
    const token = localStorage.getItem("token")
    await axios.post("http://localhost:90/product/comment/" + this.state.id, {
      comment: this.state.newComment
    }, {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.state.newComment = ""
    // alert("COmemnt posted")
    this.getComment()
  }

  componentDidMount() {
    axios.get("http://localhost:90/product/show/" + this.state.id)
      .then(res => {
        this.setState({
          product: res.data.data
        })
      })
      .catch()
    this.getComment()

  
      axios.get("http://localhost:90/product/show")
          .then((res) => {

              this.setState({
                  myproducts: res.data.data
              })
              console.log(res.data)
          })

  }

  getComment() {
    axios.get("http://localhost:90/product/comment/" + this.state.id)
      .then(res => {
        this.setState({
          comments: res.data.data
        })
      })
      .catch()
  }


  render() {
    return (
      <div>
        <Adminmenu/>
        <div>
          <h1>Product PreAdminviewProduct</h1>

          <p>Bring you the best style in your comfort and your price!</p></div>
        <hr />
        <div class="single-product-container">
          <div >
            <img src={"http://localhost:90/" + this.state.product.pimage} />
          </div>
          <form>
            <div class="column">
              <h3>{this.state.product.productName}</h3>
              <hr />
              <p>{this.state.product.productDescription}</p>
              <p>{this.state.product.price}</p>
              <ul>
                <li><h3>Available in stock:</h3> <span>Yes</span></li>
                <li><h3>Category:</h3> <span>    <p>{this.state.product.productCategory}</p></span></li>
                <li><h3>Shipping Area: </h3><span>All over the Valley</span></li>
                <li><h3>Shipping Fee:</h3> <span>Free</span></li>
                <li><h3>Policy:</h3> <span>The product must be returned as per the returning date during order time.</span></li>
                <li><h3>Cash on Delivery:</h3>
                  <span>Accepted</span></li>
              </ul>
 
              <select class="button-product">
                <option>S</option>
                <option>L </option>
                <option>M </option>
                <option>XL</option>
              </select>
            </div><br />

          </form>
        </div>


        <form className="createComment">
          <label htmlFor="comment">Your Comment</label>
          <textarea type="text" placeholder="Your Comment" required onChange={this.handleChange} value={this.state.newComment} />
          <button type="submit" onClick={this.handleSubmit} >Post Comment</button>
        </form>
        {
          this.state.comments.map(comment => {
            return (
              <div className="comment">
                <img className="commentPic" src={"http://localhost:90/" + comment.user.profile_pic} />

                <div className="commentBody">
                  <div className="commentOne">
                    <h3 className="commentname">{comment.user.username}</h3>
                  </div>
                  <div className="productcomment">
                    {comment.comment}
                  </div>
                </div>
              </div>
            )
          })
        }
        <h4>You may also like</h4>
        <hr/>
 <div class="productcard">
{
    this.state.myproducts.slice(28,32).map(product => {
        return (

            <div class="product-auth-form">
                <div class="product-image-cover">
                    <img className="medium" src={"http://localhost:90/" + product.pimage} />

                </div>

                <div class="product-form-cover">
                    <h3>{product.productName}</h3>
                    <hr />
                    <p>{product.productCategory}</p>
                    <p>{product.productDescription}</p>
                    <p>{product.price}</p>
                </div>

         
              
            </div>
        )
    })
}

</div>


      </div>


    )
  }
}
export default AdminviewProduct;


