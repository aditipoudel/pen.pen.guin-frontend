import { Component } from "react";
import Menu from "../Header/Menu";
import cover3 from '../assets/cover3.png'


class About extends Component {
    render() {
        return (

            <div>
                <Menu />
              
                <div id="main" align="center">
                    <h1 id="title">RentITWearIT: <h2>Create your
                        dream outfit
                        for every occasion.</h2></h1>
                    <div id="quote">
                        <h5 id="quote">

                            Glamorous and exclusive dress to suit your special occasion.

                            It is the idea.
                            And if the idea is strong, for you to style, in any
                            style... <br />and the idea will stay strong."
                        </h5>
                    </div>
                    <br />

                    <div id="img-div" align="center">
                        <img id="image" src={cover3} align="center" alt="RentITWearIT" />
                        <br />
                        <a id="img-caption">The RentITWearIT Fashion store for you and your needs!
                        </a>

                        <br />
                    </div>

                    <div id="tribute-info">
                        <hr />
                        <br />
                        <h4><b>Buy it!</b> Nah!! Just Rent It! ⚜️</h4>
                        <p>
                            Looking for something truly exceptional for your special occasion or can’t find the right color or style to match your outfit? Why not consider something completely different and unique and let us design something for you! All of our designs can be bought directly from the studio or together we can design and make something totally original and special for you.

                            To make your bespoke fascinator or headpiece requires an exclusive service involving discussions with the designer, Danielle Mazin, to ensure your requirements are met. We are also available to work via email, Skype, and from photo images to communicate any ideas you find to help make the perfect choice for your chosen item.

                            We will work closely with you to ensure that you receive your perfect headpiece for your perfect day.

                        </p>

                        <br />
                        <div id="city-painting">
                            <img src="https://images.pexels.com/photos/5490970/pexels-photo-5490970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="city-image" alt="Store Preview" />
                            <br />
                            <a id="city-img-caption">Store Preview: A glimpse of who we are</a>
                            <br />
                            <br />
                            <h5>

                            </h5>
                        </div>

                        <hr />

                        <div id="exhibitions">
                            <br />
                            <h2 align="left" id="schedule-header">2021 / 2022 Schedule</h2>
                            <br />

                            <h4>Store Grand Opening  &#64; RentITWearIT </h4>
                            <div class="exhibition-info">
                                <ul>
                                    <li>Dates: Tue, September 2, 2022 6:00 PM - Wed, September26, 2021 7:00 PM</li>
                                </ul>
                                <p>More info coming soon for the month of November 2022!</p>
                            </div>
                            <br />
                            <h4>Wondering How to return our drees? Its simple</h4>
                            <div class="exhibition-info">
                                <p>
                                    Returning your dress is quick and easy. Simply place it in the provided prepaid return satchel and drop it at your nearest Post Office or the yellow Express Postal Box.   Else give us a call or reach out to our mails! </p>
                            </div>
                            <div class="exhibition-info">
                                <h4>What if your rental period ends on a Sunday or a public holiday?
                                </h4>
                                <p>Just drop your return satchel (provided in your GC box) in the yellow Express Postal Box on rental return date.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <a class="footnote"></a><a class="footnote">This store is licensed and doesnt violate any rights</a>
                       <br/>
                       <br/>
                    </div>
                </div>
        <h4>Visit us at!</h4>
          <div className="responsive-map ">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.040245975033!2d85.3172707!3d27.7123154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19016c9d9fcb%3A0xd2291eee6917d60a!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1632397999413!5m2!1sen!2snp" allowfullscreen></iframe>
          </div>
          {/*//contact map grid ends here*/}
            </div>
        )

    }
}
export default About