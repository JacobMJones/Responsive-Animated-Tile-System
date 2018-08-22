import React, { Component } from "react";
import ReactSVG from 'react-svg'

class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {   
    };
  }
  prepareHtml = () => {
      if(this.props.show){
        return  <ReactSVG path='./butterfly.svg' svgStyle={{position:'absolute', height:'100%', top: '-12.5%', left: '0%', width:'100%', margin:'auto'}}></ReactSVG>
      }
      else{
          
      }
 
  }
  render() {
    return (
    <div style={{position:'relative', height:'125%'}}> 
  {/* {this.prepareHtml()}     */}
      </div>
    );
  }
}
export default InnerTile;