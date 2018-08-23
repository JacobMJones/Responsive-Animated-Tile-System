import React, { Component } from "react";
import OuterTile from "./OuterTile.js";

class RowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
      console.log('in row container', this.props.rowAmount)
  }

  prepareHtml = () => {
    let tileArray = new Array(this.props.amountOfOutterTiles)
      .fill()
      .map((item, index) => {
        return <OuterTile initialPosition={this.props.initialPosition} leftDistanceMultiplier={index+1} rowAmount={this.props.rowAmount} animationIndex={this.props.animationIndex} masterClickHandler={this.props.masterClickHandler} id={this.createID(index, this.props.rowNumber)} className={`tile-c${index}-r${this.props.rowNumber}`} initialColor={this.props.colors[index]} />;
      });
    return tileArray;
  }

  createID = (col, row) => {
    switch(row){
        case 0:
        return col+row;
        break;
        case 1:
        return col+row+2
        break;
        case 2:
        return col+row+4
        break;
    }
      return 
  }

  render() {
    return (
      <div style={{ position:'relative', height: "33.4%", width: "100%", display: "flex" }}>
        {this.prepareHtml()}
      </div>
    );
  }
}
export default RowContainer;
