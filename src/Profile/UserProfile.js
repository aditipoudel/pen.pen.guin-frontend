
import { Component } from 'react';
import axios from 'axios';
import Usermenu from '../Header/Usermenu';
import profile from '../assets/profile.png'


class userProfile extends Component {
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
        }
        catch (e) {


            console.error(e)
        }
        // .then(res => {
        // console.log(res.data)


        // })
        // .catch()
    }

    userGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    userAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    userAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    // changeFileHandler = (e) => {
    //     this.setState({
    //         profile_pic: e.target.files[0]
    //     })
    // }
    buttonProfile = async (e) => {
        //  inorder to stop reloading of the page  while the button is clicked
        e.preventDefault();

        const myData = {
            username: this.state.username,
            email: this.state.email,
            address: this.state.address,
            gender: this.state.gender,
        }

        //send data to our api
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        // console.log(myData)
        // console.log("data received")
        // console.log(this.state.gender)
        const res = await axios.post("http://localhost:90/profile/upload", {
            username: this.state.username,
            age: this.state.age,
            address: this.state.address,
            gender: this.state.gender,
        }, con)
        // this.props.history.push('/userDashboard/:id')
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <Usermenu />
            
                <div class="container">
                
                    <form>

                      
                        <ul>
                            <li>
                                <input type="text" name="username" placeholder="username"
                                    onChange={this.userProfile}
                                    value={this.state.username}
                                />
                            </li>
                            <li>
                                <input type="text" name="email" placeholder="email"
                                    onChange={this.userProfile}
                                    value={this.state.email}
                                />    </li>
                            <li>
                                <input type="text" name=" address" placeholder=" address"
                                    onChange={this.userAddress}
                                    value={this.state.address}
                                />     </li>
                            <li>
                                <input type="text" name=" age" placeholder=" age"
                                    onChange={this.userAge}
                                    value={this.state.age}
                                />   </li>
                            <input type="text" name=" gender" placeholder=" gender"

                                value={this.state.gender} onChange={this.userGender}
                            />

                            <li>
                                <button className="button" onClick={this.buttonProfile}>SEND</button>
                            </li>


                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default userProfile;