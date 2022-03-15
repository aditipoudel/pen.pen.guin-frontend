//backend npm i cors

// first of all include all of the elements like username password in inout name
import { Component } from "react";
import Menu from "../Header/Menu";
import axios from "axios"; //it works to connect to the api
import busi from "../assets/busi.jpg";
import { NavLink } from "react-router-dom";

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    }

    onChangeRegister = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    buttonRegister = (e) => {
        e.preventDefault()

        const dataRegister = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            confirmpassword: this.state.confirmpassword
        }
        //send data to our api

        axios.post("http://localhost:90/user/register", dataRegister)
    }
    render() {
        return (

            <div> 
                {/* <Menu /> */}
            <button className="log">Get Started</button>
                <div class="card">
                    <div class="auth-form">
                        <div class="image-cover">
                            <img src={busi} className="login" />
                        </div>
                        <div class="form-cover">

                            <input class="input-style" type="text" placeholder="Full Name" name="username"
                                value={this.state.username} onChange={this.onChangeRegister}
                            /><br />

                            <input class="input-style" type="email" placeholder="Email" name="email"
                                value={this.state.email} onChange={this.onChangeRegister}
                            /><br />
                            <input class="input-style" type="password" placeholder="Password" name="password"
                                value={this.state.password} onChange={this.onChangeRegister}
                            /><br />
                            <input class="iinput-style" type="password" placeholder="Password" name="password"
                                value={this.state.password} onChange={this.onChangeRegister}
                            /><br />
                            <button className="buttonlog" type="button" onClick={this.buttonRegister} >Submit</button>
                         <br/>
                            <NavLink to={"/login"} className="navlogin">Already Registered?    Login</NavLink>
                            
                            
                        </div>
                      
                    </div>
                </div>
            </div>




        )
    }
}

export default Register
