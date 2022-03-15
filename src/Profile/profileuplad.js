import { Component } from 'react';
import Usermenu from '../Header/Usermenu';
import axios from 'axios';
import upload from '../assets/upload.png'

class ProfileUpload extends Component{

    state = {
        filename: null
    }

    changeFileHandler = (e) => {
        this.setState({
            filename: e.target.files[0]
        })
    }

    sendData = (e) => {
        e.preventDefault();
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        const data = new FormData();    
        alert("clicked")
        data.append('myimage', this.state.filename)
        axios.post("http://localhost:90/profile/uploadimage", data,con)
            .then((result) => {
                alert("chnaged")
                console.log(result)
            })
     
            .catch()
    }
    render(){
        return(
            <div>       <Usermenu/>
        
          
            <div class="container">
          
     
            <li>
   <input type="file" name="files" onChange={this.changeFileHandler} /></li> 
   <button onClick={this.sendData}>Send</button>
   </div>
   </div>
        )
    }
    }
    export default ProfileUpload;
