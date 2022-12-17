import React, { Component } from "react";
// import profilePic from '../pics/profilePic.jpg';

 
class About extends Component {
  render() {
    return (
      <div>
       <h1 className="title">Rent-A-Track</h1>
        <h2>Racers, rev your engines!</h2>
        <br></br>
        <h4>Are you ready for the experience of a lifetime?</h4>
        <br></br>
<div className="profile">
        {/* <img className = "profilePic" src= {profilePic}></img> */}
        <h3 className="ptag">Here in Rent-a-Track we are commited in bringing a once in a lifetime experience to your local track, wether you are looking to make a pass down the drag strip, learn the ropes about drifting on the skid pad or shred some tires on the big bank, we can facilitate that you have all the space that you need to do so!</h3>
        </div>  
      </div>
    );
  }
}
 
export default About;