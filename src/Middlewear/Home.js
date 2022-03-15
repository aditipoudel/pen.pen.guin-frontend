import { Component } from "react";
import axios from "axios";

import Menu from "../Header/Menu";
// for images in home page
import Dresses from '../assets/Dresses.png'
import Footwear from '../assets/Footwear.png'
import Gown from '../assets/Gown.png'
import Purse from '../assets/Purse.png'
import Sari from '../assets/Sari.png'
import Tuxedo from '../assets/Tuxedo.png'
import Lehenga from '../assets/Lehenga.png'

// import product from '../assets/product.jpeg'

import ks from '../assets/ks.png'


// import home from '../assets/home.png'

// import coverone from '../assets/coverone.png'
import cover3 from '../assets/cover3.png'
import cover4 from '../assets/cover4.png'
import cover5 from '../assets/cover5.png'
import coversix from '../assets/coversix.png'
import Accessories from '../assets/Accessories.png'
import { NavLink } from "react-router-dom";



class Home extends Component {
  state = {
    id: "",
    contactname: "",
    email: "",
    number: "",
    message: "",
  }
  textContactHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:90/contact", {

      contactname: this.state.contactname,
      email: this.state.email,
      number: this.state.number,
      message: this.state.message
    })

  }
  render() {
    return (

      <div>
<Menu/>

        <div className="second">
          <div className="image-section center" id="home">
            <img className="Homeimage" src={ks} alt="RentITWearIt" />
          </div></div>
        {/* <section className="about">
          <div className="about-container">
            <div className="heading text-center">
              <h2>About_
                <span>Us</span></h2>
              <p>The World is Your Runway
                <br />
                Forget the Price Tag!
                Finally the solution to wearing everything you want, no purchase necessary.
              </p>
              <hr />
            </div>
            <div className="about-row">
              <div className="col">
                <img src={cover3} alt="about" className="img-fluid" width="100%" />
              </div>
              <div className="col">

                <p>We're Giving Fashion A Green-Over
                  We're taking fashion for a ride. As one of the world’s most polluting industries,
                  we're making it our business to undo what it started, one rental at a time.<br />
                  Get that new clothes feeling for special events, work, weekends – you name it!<br />Don't leave it to chance, hire your dress from a professional... </p>
                <NavLink className="button"

                  to="/Aboutus"
                >
                  Read More
                </NavLink>
              </div>

            </div>
          </div>
        </section> */}
        {/* <main>
          <hr />
          <div className="main">
            <div>
              <h4>We Serve</h4>
              <div class="separator"><img src="https://cdn-icons-png.flaticon.com/512/2818/2818650.png" /></div>
            </div>
            <ul className="cards">
            
                <li className="cards_item">
                  <div className="categorycard">
                    <div className="card_image"><img src={Dresses} /></div>
                    <div className="card_content">
                      <h2 className="card_title">Dresses</h2>
                      <p className="card_text">Pick an outfit to lease with ease!</p>

                    </div>
                  </div>
                </li>
              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Gown} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Gown</h2>
                    <p className="card_text">Get designer gown at just retail price. </p>

                  </div>
                </div>
              </li>

              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Lehenga} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Lehenga</h2>
                    <p className="card_text">Why buy when you can own?</p>

                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Purse} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Purse</h2>
                    <p className="card_text">Rent your favourite brands!</p>

                  </div>
                </div>
              </li>

              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Tuxedo} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Tuxedo</h2>
                    <p className="card_text">Browse through our exclusive collection!</p>

                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Accessories} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Accessories</h2>
                    <p className="card_text">Why not Rent if You'll Only Wear It Once? </p>

                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Sari} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Sari</h2>
                    <p className="card_text">Discover luxury designer dresses from top brands.</p>

                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="categorycard">
                  <div className="card_image"><img src={Footwear} /></div>
                  <div className="card_content">
                    <h2 className="card_title">Footwear</h2>
                    <p className="card_text">Select your size, the preferred duration!</p>

                  </div>
                </div>
              </li>
            </ul>
          </div>
          <br />
          <section class="amazing_feature">
            <div >
              <div >
                <h2 class="heading">OUR FEATURES</h2><br />
                <div class="separator"><img src="https://cdn-icons-png.flaticon.com/512/2898/2898372.png" /></div>
              </div>
            </div>
            <div class="containerfeature">
              <div class="rowfeature">
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/3208/3208707.png" /></div>
                    <h3>Made with Love!</h3>
                    <p>Elegance is being remembered.The joy of dressing is an art.</p>
                  </div>
                </div>
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" /></div>
                    <h3>Shop more!</h3>
                    <p>What you wear is how you present yourself to the world, especially today.</p>
                  </div>
                </div>
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/1785/1785375.png" /></div>
                    <h3>Best Styles!</h3>
                    <p>Fashion is what you're offered everytime you rent by designers.</p>
                  </div>
                </div>
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" /></div>
                    <h3>Reliable!</h3>
                    <p>Fashion is part of the daily air and it changes all the time, with all the events.</p>
                  </div>
                </div>
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" /></div>
                    <h3>Buy less save more!</h3>
                    <p>Not only will you save on rent, but there are other things that could become cheaper, too.</p>
                  </div>
                </div>
                <div class="colfeature">
                  <div class="single_feature">
                    <div class="feature_icon"><img src="https://cdn-icons-png.flaticon.com/512/3078/3078971.png" /></div>
                    <h3>Rent IT!</h3>
                    <p>I like my money right where I can wear it, not hang in my closet."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="cardcolor">
            <div>
              <h4>Recent</h4>
              <div class="separator"><img src="https://cdn-icons-png.flaticon.com/512/5053/5053917.png" /></div>
            </div>
            <div className="image-card-component">
              <div className="image">
                <img src={coversix} />
              </div>
              <div className="content">
                <div className="content-text">
                  <h3>Fashion freedom</h3>
                  <p>
                    Explore different styles, discover designers, and try new things from the largest designer rental closet.
                  </p>
                </div>
                <a href="#" className="button">View</a>
              </div>
            </div>
            <div className="image-card-component">
              <div className="image">
                <img src={cover4} />
              </div>
              <div className="content">
                <div className="content-text">
                  <h3>Total Flexibility</h3>
                  <p>
                    Let's be real: your style, size and budget change over time. Now, your closet can too.
                  </p>
                </div>
                <a href="#" className="button">View</a>
              </div>
            </div>
            <div className="image-card-component">
              <div className="image">
                <img src={cover5} />
              </div>
              <div className="content">
                <div className="content-text">
                  <h3>Sustainable Footprint</h3>
                  <p>
                    Most clothes we buy end up in the back of closets or landfills. Power the sharing economy and rent instead.
                  </p>
                </div>
                <a href="#" className="button">View</a>
              </div>
            </div>
          </div>
        </main> */}
        <br /> <br />

        <form id="myform">
          <h3>Send us what you think?</h3>
          <hr />
          <div className="area">
            <div className="row">
              <div className="col2">
                <input type="text" name="contactname" placeholder="name" value={this.state.contactname} onChange={this.textContactHandler} />
              </div>
              <div className="col2">
                <input name="number" placeholder="number" value={this.state.number} onChange={this.textContactHandler} />
              </div>
            </div>
          </div>
          <div className="row">
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.textContactHandler} />
          </div>
          <div className="row">
            <textarea type="text" name="message" placeholder="message" value={this.state.message} onChange={this.textContactHandler}></textarea>
          </div>
          <div className="row">
            <button className="buttonlog" onClick={this.sendMessage} >Submit</button>
          </div>
        </form>






      </div>











    )
  }
}

export default Home