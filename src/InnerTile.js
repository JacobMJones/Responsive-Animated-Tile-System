import React, { Component } from "react"
import ReactSVG from "react-svg"
import TileScaleAnimations from "./TileScaleAnimations.js"
import ImageArrays from "./ImageArrays.js"

class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }
  componentDidUpdate(nextProps) {

    if (!this.props.faceVisible) {
      TileScaleAnimations.opacity("face", .2, 1,0);
      TileScaleAnimations.opacity("back", 0, 0,0);
    } else {
      TileScaleAnimations.opacity("face", 0, 0, .2);
      TileScaleAnimations.opacity("back", .2, 1, 0);
    
    }
  this.faceVisible != this.faceVisible
  }
  prepareHtml = () => {

    return (
      <div>
      <img
        className="face"
        style={{ position: "absolute", width: "100%", height: "80%" }}
        src={ImageArrays.frontImage[this.props.id]}
      />
      <div  
      className="back"
        style={{ position: "absolute", width: "100%", height: "80%" }}
        src={ImageArrays.backImage[this.props.id]}
      > 

      <div style={{ width:'100%', height:"100%"}}>
      <img  style={{position: 'relative', textAlign:'center', width:'100%', height:"100%"}} src={ImageArrays.backImage[this.props.id]}></img>
      </div>
      {/* <div style={{zIndex:'100', fontSize:'125%', position: 'relative', textAlign:'center', top:'-50%'}}>
     {this.state.titles[this.props.id]} 
     
      </div> */}
    
     
      </div>
      </div>
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
