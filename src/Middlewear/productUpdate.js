import axios from "axios";
import { Component } from "react";


class ProductUpdate extends Component {
    state = {
        productName: "",
        productDescription: "",
        productCategory: "",
        price: "",
        id: this.props.match.params.id
    }

    componentDidMount() {
        //    console.log(this.props.history)
        // alert(this.props.match.params.id)
        axios.get("http://localhost:90/product/show/" + this.state.id)
            .then(res => {

                this.setState({
                    productName: res.data.data.productName,
                    productDescription: res.data.data.productDescription,
                    productCategory: res.data.data.productCategory,
                    price: res.data.data.price
                })

            })
            .catch()
    }

    aloo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:90/product/update/${this.state.id}`, this.state)
            .then(res => {
            })
            .catch()
        this.props.history.goBack();
    }

    render() {
        return (

            <div class="container">
                <h3>Update Product Here</h3>
                <hr />

                <form onSubmit={this.updateProduct}>
                    <ul>
                        <li>
                            <input type="text" name="productName" placeholder="Product Name"
                                onChange={this.aloo}
                                value={this.state.productName}
                            />
                        </li>
                        <li>
                            <input type="text" name="productDescription" placeholder="Product Description"
                                onChange={this.aloo}
                                value={this.state.productDescription}
                            />    </li>
                        <li>
                            <input type="text" name="productCategory" placeholder="Product Category"
                                onChange={this.aloo}
                                value={this.state.productCategory}
                            />     </li>
                        <li>
                            <input type="text" name="price" placeholder="Price"
                                onChange={this.aloo}
                                value={this.state.price}
                            />   </li>
                        <li>
                            <button className="button" >UPDATE</button>
                        </li>


                    </ul>
                </form>
            </div>
        )
    }
}


export default ProductUpdate;