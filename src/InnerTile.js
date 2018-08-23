import React, { Component } from "react";
import ReactSVG from "react-svg";
import TileScaleAnimations from "./TileScaleAnimations.js";
import TileTexture from "./tile-texture.png";

class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      titles: [
        "Completed Projects",
        "Current Projects",
        "Fragments",
        "To-Do Blog",
        "Learning Blog",
        "Big To-Do",
        "FAQ",
        "Resume",
        "Look Into My Eyes"
      ],
      myBack:[
        "topleftback6.png",
        "topmidback.png",
        "toprightback.png",
        "midleftback.png",
        "mmback.png",
        "midrightback.png",
        "bottomleftback.png",
        "bottommidback.png",
        "bottomrightback.png",
      ],

      cardSVGs: [
        "completed-project.svg",
        "current-project.svg",
        "fragments2.svg",
        "todo.svg"
      ],
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
        src={this.state.myFace[this.props.id]}
      />
      <div  
      className="back"
        style={{ position: "absolute", width: "100%", height: "80%" }}
        src={this.state.myFace[this.props.id]}
      > 

      <div style={{ width:'100%', height:"100%"}}>
      <img  style={{position: 'relative', textAlign:'center', width:'100%', height:"100%"}} src={this.state.myBack[this.props.id]}></img>
      </div>
      {/* <div style={{zIndex:'100', fontSize:'125%', position: 'relative', textAlign:'center', top:'-50%'}}>
     {this.state.titles[this.props.id]} 
     
      </div> */}
      <div style={{position:'relative', left: '25%', top:'-20%', width:'50%'}}>  
      
      {/* <ReactSVG  path={this.state.cardSVGs[this.props.id]}></ReactSVG>  */}
      
      </div>
     
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
