import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import Menu from "../Header/Menu";
import cross from '../assets/cross.png';
import tick from '../assets/tick.png';
import search from '../assets/search.png';

class userViewProduct extends Component {

    state = {
        myproducts: []
    }
    componentDidMount() {
        axios.get("http://localhost:90/product/show")
            .then((res) => {

                this.setState({
                    myproducts: res.data.data
                })
                console.log(res.data)
            })
    }


    addToCart = (pro_idd) => {
        const token = localStorage.getItem("token")
        console.log(token)
        console.log(pro_idd)
        console.log("http://localhost:90/user/addtocart/" + pro_idd)
        axios.post("http://localhost:90/user/addtocart/" + pro_idd, { pro_idd }, {
            headers: {
                'authorization': "Bearer " + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        alert("added")

    }


    render() {
        return (
            <div><Menu />
             <img  src={search}  width="100%" />
          <button className="CButton">CATEGORY</button>
                <div class="productcard">

                    {
                        this.state.myproducts.map(product => {
                            return (

                                <div class="product-auth-form">
                                       <img  src={cross} className="cross" />
                                    <div class="product-image-cover">
                                        <img className="cart-img" src={"http://localhost:90/" + product.pimage} />

                                    </div>

                                    <div class="product-form-cover">
                                        <h5>{product.productName}</h5>
                                    
                                        {/* <p>{product.productCategory}</p>
                                        <p>{product.productDescription}</p>
                                        <p>💸{product.price}</p> */}
                                    </div>
                                    {/* <button className="button" onClick={() => this.addToCart(product._id)}>Add to cart🛒</button> */}
                                 
                                    <NavLink to={"/view/"+product._id} class="button">View</NavLink>
                                    <img  src={tick} className="cross" />
                                </div>
                            )
                        })
                    }

                </div>
          <br/>
                <h2> Recommeded 👍</h2>   
                <br/>

          <div class="productcard">
        

                    {
                     this.state.myproducts.slice(3,9).map(product => {
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
                                    {/* <button className="button" onClick={() => this.addToCart(product._id)}>Add to cart🛒</button> */}
                                 
                                    <NavLink to={"/view/"+product._id} class="button">View</NavLink>
                                </div>
                            )
                        })
                    }

                </div>
         
         
            </div>

        )
    }
}
export default userViewProduct;
