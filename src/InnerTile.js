import React, { Component } from "react";
import ReactSVG from "react-svg";
import TileScaleAnimations from "./TileScaleAnimations.js";
class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      myFace: [
        "topleft.png",
        "topmid.png",
        "topright.png",
        "midleft.png",
        "midmid.png",
        "midright.png",
        "bottomleft.png",
        "bottommid.png",
        "bottomright.png"
      ]
    };
  }
faceVisible = true;
  componentDidUpdate(nextProps) {

    console.log("in inner tile component update", this.props.faceVisible);
    if (!this.props.faceVisible) {
      TileScaleAnimations.opacity("face", 0.5, 1);
  
     
    } else {
      TileScaleAnimations.opacity("face", 0.5, 0);
    
    }
  this.faceVisible != this.faceVisible
  }
  prepareHtml = () => {
    return (
      <img
        className="face"
        style={{ position: "absolute", width: "100%", height: "80%" }}
        src={this.state.myFace[this.props.id]}
      />
    );
  };
  render() {
    return (
      <div style={{ position: "relative", height: "125%" }}>
        {this.prepareHtml()} 
      </div>
    );
  }
}
export default InnerTile;
