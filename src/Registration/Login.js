import { Component } from "react";
import Menu from "../Header/Menu";
import axios from "axios"
import busi from "../assets/busi.jpg"; 
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isBuyer: false,
            isAdmin: false,
        }
        this.loginhandle = this.loginhandle.bind(this)
        this.buttonLogin = this.buttonLogin.bind(this)
    }
    loginhandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    buttonLogin = (e) => {
        //  inorder to stop reloading of the page  while the button is clicked
        e.preventDefault();

        const dataLogin = {
            email: this.state.email,
            password: this.state.password
        }

        e.preventDefault()
        //send data to our api
        axios.post("http://localhost:90/user/login", this.state)
            .then((res) => {
                console.log(res.data.userType)
                // if(userEvent.role === 'Admin') this.state({
                //     isAdmin: true
                // })
                if (res.data.userType == "Buyer") {
                    this.props.history.push('/userDashboard')
                }
                else {
                    this.props.history.push('/adminDashboard')
                }
                localStorage.setItem('token', res.data.t); //saves the token  
                localStorage.setItem('userID', res.data.userID);
                // alert("User Login")
            })
            .catch((err) => {
                console.log(err.response)
            })


        login(dataLogin).then((res) => {
            if (this.state.isBuyer) {
                this.props.history.push('/userDashboard/:id')
            } else if (this.state.isAdmin) {
                this.props.history.push('/adminDashboard/:id')
            }
        })
    }

    render() {
        if (this.state.isAdmin) {

            return <Redirect to="/adminDashboard/:id" />;

        } else if (this.state.isBuyer) {

            return <Redirect to="/userDashboard/:id" />;

        }
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
                        
                            <input class="input-style" type="text" placeholder="Email" name="email"
                                value={this.state.email} onChange={this.loginhandle}
                            /><br />
                            <input class="input-style" type="password" placeholder="Password" name="password"
                                value={this.state.password} onChange={this.loginhandle}
                            /><br />
                            <button type="button" className="buttonlog" onClick={this.buttonLogin} >Login</button>
                            <br/>
                            <NavLink to={"/Register"} className="navlogin">Not logged in?  Register </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const login = (dataLogin) => {
    return axios
        .post("http://localhost:90/user/login", {
            email: dataLogin.email,
            password: dataLogin.password
        })
        .then((response) => {
            localStorage.setItem('token', response.data.t)

            return response.data
        })
        .catch((error) => {
            console.log("Invalid email or password")
        })
}


export default Login
