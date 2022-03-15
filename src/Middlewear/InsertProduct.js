import axios from "axios";
import { Component } from "react";
import Adminmenu from "../Header/Adminmenu";

class InsertProduct extends Component {
    state = {
        id: "",
        price: "",
        productName: "",
        productDescription: "",
        productCategory: "",
        filename: null
    }
    textChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeFileHandler = (e) => {
        this.setState({
            filename: e.target.files[0]
        })
    }

    sendData = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('price', this.state.price)
        data.append('productName', this.state.productName)
        data.append('productDescription', this.state.productDescription)
        data.append('productCategory', this.state.productCategory)
        data.append('product_image', this.state.filename)
        axios.post("http://localhost:90/product/insert", data)
            .then((result) => {
                console.log(result)
            })
            .catch()
    }
    render() {
        return (
            <div>
            <Adminmenu/>
            <div className="contact-section">
          <div className="wrapper">
            <div className="bubble"></div>
          </div>
        </div>
            <div class="container">
                
                <h3>Add Products Here!</h3>
                <hr />
                <form>
                    <ul>
                        <li>   <input type="text" name="productName" placeholder="Product Name"
                            onChange={this.textChangeHandler}
                            value={this.state.productName}
                        />
                        </li>
                        <li>
                            <input type="text" name="productCategory" placeholder="Product Category"
                                onChange={this.textChangeHandler}
                                value={this.stateproductCategory}
                            />
                        </li>
                        <li>
                            <input type="text" name="price" placeholder="Price"
                                onChange={this.textChangeHandler}
                                value={this.state.price}
                            />
                        </li>
                        <li>
                            <input type="text" name="productDescription" placeholder="Product Description"
                                onChange={this.textChangeHandler}
                                value={this.state.productDescription}
                            />
                        </li>
                        <li>
                            <input type="file" name="files"
                                onChange={this.changeFileHandler}
                            /></li>
                        <button className="button" onClick={this.sendData}>INSERT</button>

                    </ul>
                </form>
            </div>
            </div>
        )
    }


}

export default InsertProduct