import React, { Component } from "react";
import ReactSVG from "react-svg";
class Tile extends Component {
  constructor(props){
    super(props);
    this.state ={
      tiles: this.createBoardCoords()
    }
  }

  tileClicked = (tile, index) => {
    // this.setState({hexagons})
    console.log('clicked')
  }
  createBoardCoords = () =>{
    return 'hello'
  }
  render() {
    return (
      
      <ReactSVG svgStyle={{width:'40vw', backgroundColor:'lightgreen', margin:'auto'}} onClick={this.props.clickHandler} path="butterfly.svg"/>     

    );
  }
}

export default Tile;