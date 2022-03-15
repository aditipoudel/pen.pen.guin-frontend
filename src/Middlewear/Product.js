import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import Adminmenu from "../Header/Adminmenu";

class Product extends Component {

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
    //for update function

    // updateOne= async(pro_idd)=>{
    //     const res = await axios.put("http://localhost:90/product/update/"+ pro_idd, {
    //         headers: {
    //           'authorization': `Bearer ${localStorage.getItem("token")}` 
    //         }
    //       })
    //     }

    // delete product funtion
    deleteOne = async (pro_idd) => {
        const res = await axios.delete("http://localhost:90/product/delete/" + pro_idd, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        // .then()
        // .catch()

    } // for add to cart function
    // addToCart = (pro_idd) => {
    //     const token = localStorage.getItem("token")
    //     console.log(token)
    //     console.log(pro_idd)
    //     console.log("http://localhost:90/user/addtocart/" + pro_idd)
    //     axios.post("http://localhost:90/user/addtocart/" + pro_idd, { pro_idd }, {
    //         headers: {
    //             'authorization': "Bearer " + token,
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }

    //     })
    //     alert("added")

    // }


    render() {
        return (
            <div>
                <Adminmenu/>
          
                <div class="productcard">

                    {
                     
                        this.state.myproducts.map(product => {
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

                                    <button className="button" onClick={() => this.deleteOne(product._id)}>Delete</button>
                                    <NavLink to={"/update/" + product._id} class="button">Update</NavLink>
                                    {/* <NavLink to={"/viewAdmin/"+product._id} >☺</NavLink> */}
                                    {/* <button className="button-product" onClick={()=>this.addToCart(product._id)}>Add to cart</button> */}

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        )
    }
}
export default Product;
