import React, { Component } from "react";
import ReactSVG from 'react-svg'

class InnerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFace:['topleft.png', 'topmid.png', 'topright.png', 'midleft.png', 'midmid.png', 'midright.png', 'bottomleft.png', 'bottommid.png', 'bottomright.png']   
    };
  }
  prepareHtml = () => {


  //   let imageArray = this.state.myFace
  //   .map((item, index) => {
  //     return <img style={{position:'relative', width:'100%', height:'80%'}} src={item}/>
  //   });

  // return imageArray;
    console.log('in prerp');
    
      if(this.props.show){

        return<img style={{position:'relative', width:'100%', height:'80%'}} src={this.state.myFace[this.props.id]}/>

        // return  <ReactSVG path='./butterfly.svg' svgStyle={{position:'absolute', height:'100%', top: '-12.5%', left: '0%', width:'100%', margin:'auto'}}></ReactSVG>
      }
      else{
          
      }
 
  }
  render() {
    return (
    <div style={{position:'relative', height:'125%'}}> 
 {this.prepareHtml()}     
      </div>
    );
  }
}
export default InnerTile;