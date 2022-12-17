import React, { Component } from "react";
import dragstrip1 from "../pics/oswdragstrip1.jpg";
import dragstrip2 from "../pics/oswdragstrip2.jpg";
import dragstrip3 from "../pics/oswdragstrip3.jpg";
import skidpad1 from "../pics/oswskidpad1.jpg";
import skidpad2 from "../pics/oswskidpad2.jpg";
import oval1 from "../pics/oswoval1.jpg";
import oval2 from "../pics/oswoval2.jpg";
import oval3 from "../pics/oswoval3.jpg";


class Gallery extends Component {

state = {
    index: 0,
    picList: [dragstrip1, dragstrip2, dragstrip3, skidpad1, skidpad2, oval1, oval2, oval3]
}

onClickNext= () => {
if (this.state.index + 1 === this.state.picList.length) {
this.setState({
  index: 0
})
} else {
this.setState({
  index: this.state.index + 1
})
}
}
onClickPrevious= () => {
if (this.state.index - 1 === -1 ){
this.setState({
  index: this.state.picList.length - 1
})
} else {
this.setState({
  index: this.state.index - 1
})
}
}
 

  render() {
    return (
      <div>
        <br></br>
        <h2>Tracks We Manage</h2>
        <br></br>
        <h2>Orlando Speed World</h2>
        <br></br>
<center>
<div class="frame">
  <div class="mat">
    <div class="art">
        <img src={this.state.picList[this.state.index]}/> 
        </div>
  </div>
</div>
        <br/>
            <button className="fancyButton" onClick={this.onClickPrevious}> Previous </button>
            <br></br>
            <button className="fancyButton" onClick={this.onClickNext}> Next </button>
            </center>

      </div>
    );
  }
}
 
export default Gallery;