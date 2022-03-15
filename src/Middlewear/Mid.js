import { Switch, Route } from "react-router-dom";

import Register from "../Registration/Registration"
import Login from "../Registration/Login"
import Product from "./Product";
import InsertProduct from "./InsertProduct";
import React from "react";
import ProductUpdate from "./productUpdate"
import Home from "./Home";
import userViewProduct from "./userViewProduct";
import userProfile from "../Profile/UserProfile";
import About from "./Aboutus";
import AdminviewProduct from "./AdminviewProduct";
import userDashboard from "../Dashboard/userDashboard"
import AdminDashboard from "../Dashboard/AdminDashbaord";

import view from "./view";


// just trial for cart

import cart from "../cart/cart";
import ProfileUpload from "../Profile/profileuplad";

import popup from "../popup/popup";


class Mid extends React.Component {
    render() {
        return (

            <div className="Mid">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/Register" component={Register} />
                    <Route path="/login" component={Login} />

                    {/* for user */}
                    <Route path="/user/profile" component={userProfile} />

                    <Route path="/Product/userViewProduct" component={userViewProduct} />
                    {/* for Admin */}
                    <Route path='/' exact component={Home} />
                    <Route path='/Aboutus' exact component={About} />
                    <Route path="/Product" component={Product} />
                    <Route path="/update/:id" component={ProductUpdate} />
                    <Route path="/view/:id" component={view} />
                    <Route path="/viewAdmin/:id" component={AdminviewProduct} />
                    <Route path="/InsertProduct" component={InsertProduct} />
                    {/* for dashbaord */}
                    <Route path="/userDashboard" component={userDashboard} />
                    <Route path="/profile/uploadimage" component={ProfileUpload} />
                    {/* for admin */}
                    <Route path="/adminDashboard" component={AdminDashboard} />


                    <Route path="/popup" component={popup} />

                    {/* just trial */}
                    <Route path="/cart" component={cart} />
                </Switch>
            </div>
        )
    }
}
export default Mid;