import React, { Component } from "react";
import TileMoveAnimations from "./TileMoveAnimations";
import TileScaleAnimations from "./TileScaleAnimations";
import ExpandingAnimation from "./ExpandingAnimation.js"
import InnerTile from "./InnerTile.js";

class OutterTile extends Component {
  constructor(props) {
    super(props);
    this.state = { inInitialPosition: true };
  }

  componentDidUpdate(nextProps) {
    let { className, animationIndex, rowAmount } = this.props;
   ExpandingAnimation.expand(animationIndex, className, rowAmount, this.state.id);
  }
  componentDidMount() {
    this.setState({
      id: this.props.id,
      backgroundColor: this.props.initialColor,
      left: 0,
      top: 0,
      inInitialPosition: true,
      showSVG: true
    });
  }

  clickHandler = () => {
    this.props.masterClickHandler(this.state.id);
  };
  render() {
    let { backgroundColor } = this.state;
    let { className, leftDistanceMultiplier } = this.props;
    return (
      <div
        className={className}
        onClick={() => {
          this.clickHandler(className);
        }}
        style={{
          position: "relative",
          top: this.state.top,
          left: this.state.left,
          height: "100%",
          width: "33.3%",
          backgroundColor: backgroundColor
        }}
      >
        <InnerTile id={this.props.id} show={this.state.showSVG} />
      </div>
    );
  }
}

export default OutterTile;

