import { Component } from 'react';
import Usermenu from '../Header/Usermenu';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';



class userDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            username: "",
            email: "",
            address: "",
            gender: "",
            age: "",
            profile_pic: "",
            userID:localStorage.getItem("userID") ,


//for the order //
orders:[],

//ends here
            con: {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }

            // profile_pic:""
        }

    }
    async componentDidMount() {
        try {
            console.log(localStorage.getItem("token"))
            const con = {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            // const token = localStorage.getItem("token")
            const res = await axios.get("http://localhost:90/user/profile", con)

            this.setState({

                username: res.data.data.username,
                email: res.data.data.email,
                address: res.data.data.address,
                age: res.data.data.age,
                gender: res.data.data.gender,
                profile_pic: res.data.data.profile_pic
            })

            console.log(res)



                  // for the order here
        const res1 = await axios.get(`http://localhost:90/order/${this.state.userID}`, con)
        // console.log(res1)
        this.setState({
          orders: res1.data.data
        })

        //ends here
        }
        catch (e) {
            console.error(e)
        }

    }

    render() {
        return (
            <div>
                <Usermenu />
                <div class="contact-section">
                    
                    <div >
                        <header >
                            <h2>Hello, {this.state.username}</h2>
                        </header>
                        <h1>We are Happy to See you here!</h1>
                    </div>
                </div>
                <br />
                <br />
                {/* for the dashboard */}
                <div className="dashboard">
                    <div class="row-profile ">
                        <img className="primary" src={"http://localhost:90/" + this.state.profile_pic} />
                        <br />
                        <Link class="button"
                            to="/profile/uploadimage"
                        >
                            Upload image
                        </Link>

                    </div>
                    <div class="profiletext">
                        <div>
                            <h4>Your Details are </h4>
                            <div class="separator"><img src="https://cdn-icons-png.flaticon.com/512/639/639719.png" /></div>
                        </div>
                        <hr />
                        <p> Username : {this.state.username}</p>
                        <p>
                            Email :{this.state.email}
                        </p>
                        <p>
                            Gender : {this.state.gender}
                        </p>

                        <Link
                            class="button"
                            to="/user/profile"
                        >
                            Edit
                        </Link>
                    </div>
                    {/* view my cart design */}
                   <Link to="/cart">
                    <div class="shopping-cart">
                        <div id="controls">
                            <p>View my Bookmarks</p>
                        </div>
                        <div id="badge"></div>
                        <div class="feature_icon"><img src=" https://cdn-icons-png.flaticon.com/512/5617/5617618.png" /></div>

                    </div>
                    </Link>
                </div>
               
<br></br>

            </div>

        )
    }
}


export default userDashboard;