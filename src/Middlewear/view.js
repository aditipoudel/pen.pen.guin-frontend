import { Component } from "react";
import axios from "axios";

import Menu from "../Header/Menu";
import { NavLink } from "react-router-dom";
class view extends Component {

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
      comment: this.state.newComment,
      rating: 3
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
        <Menu />
        <div>
          <h1>Product Preview </h1>
          </div>
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
                <li><h3>Sample text:</h3> <span>Sample text</span></li>
                <li><h3>Sample text:</h3> <span>Sample text</span></li>
                <li><h3>Sample text:</h3> <span>Sample text</span></li>
                <li><h3>Category:</h3> <span>    <p>{this.state.product.productCategory}</p></span></li>
              
                <li><h3>Terms and Conditions</h3> <span>Delivery and Return Policy:The product must belorwm lorem lorem .</span></li>
        
              </ul>
            </div>
            <button className="button">Bookmark</button>
                                 
          </form>
        </div>


        <form className="createComment">
          <label htmlFor="comment">Add Reviews</label>
          <textarea type="text" placeholder="Your Comment" required onChange={this.handleChange} value={this.state.newComment} />
          <select >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit" onClick={this.handleSubmit} >Post</button>
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
                  <div className="productcomment">
                    {comment.rating}
                  </div>
                </div>
              </div>
            )
          })
        }
        <h4>You may also like</h4>
        <hr/>
      
 {/* <div class="productcard">

{
    this.state.myproducts.slice(0,6).map(product => {
        return (
          < a href={"/view/"+product._id}>
            <div class="product-auth-form">
                <div class="product-image-cover">
                    <img className="medium" src={"http://localhost:90/" + product.pimage} />

                </div>

                <div class="product-form-cover">
                    <h3>{product.productName}</h3>
                    <hr />
                    <p>{product.productCategory}</p>
          
                </div>
       
            </div>
            </a>
         
        )
    })
}

</div> */}
<div class="productcard">
        

        {
         this.state.myproducts.slice(7,13).map(product => {
                return (

                    <div class="product-auth-form">
                        <div class="product-image-cover">
                            <img className="cart-img" src={"http://localhost:90/" + product.pimage} />

                        </div>

                        <div class="product-form-cover">
                            <h5>{product.productName}</h5>
                        
                            {/* <p>{product.productCategory}</p>
                            <p>{product.productDescription}</p>
                            <p>💸{product.price}</p> */}
                        </div>
                        {/* <button className="button" onClick={() => this.addToCart(product._id)}>Add to cart🛒</button>
                     
                        <NavLink to={"/view/"+product._id} class="button">View</NavLink> */}
                    </div>
                )
            })
        }

    </div>


      </div>


    )
  }
}
export default view;


