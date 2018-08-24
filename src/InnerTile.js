import React, { Component } from "react";
import ReactSVG from "react-svg";
import TileScaleAnimations from "./TileScaleAnimations.js";
import ImageArrays from "./ImageArrays.js";

class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  prepareHtml = () => {
    return (
      <div>
        <div>
          <img
            className="face"
            style={{
              zIndex: "100",
              position: "absolute",
              width: "100%",
              height: "80%"
            }}
            src={ImageArrays.frontImage[this.props.id]}
          />
        </div>
        <div style={{ position: "absolute", width: "100%", height: "80%" }}>
          <img
            className="back"
            style={{
              position: "relative",
              textAlign: "center",
              width: "100%",
              height: "100%"
            }}
            src={ImageArrays.backImage[this.props.id]}
          />
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
