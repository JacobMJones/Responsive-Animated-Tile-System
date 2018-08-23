import React, { Component } from "react";
import ExpandingAnimation from "./ExpandingAnimation.js";
import InnerTile from "./InnerTile.js";

class OuterTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    let { className, animationIndex, rowAmount } = this.props;

    ExpandingAnimation.expand(
      animationIndex,
      className,
      rowAmount,
      this.state.id
    );
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

  render() {
    let { backgroundColor } = this.state;
    let { className } = this.props;
    return (
      <div
        className={className}
        onClick={() => {
          this.props.masterClickHandler(this.state.id);
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
        <InnerTile
          faceVisible={this.faceVisibile}
          id={this.props.id}
          show={this.state.showSVG}
        />
      </div>
    );
  }
}

export default OuterTile;
