import React, { Component } from "react";
import FlexContainer from "./FlexContainer.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {   
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div
        className="main-container"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          position:'fixed'
        }}
      >
        <FlexContainer 
        rows={3}
        columns={3}
        height={'70%'}
        width={'70%'}
        paddingTop={'15vh'}
        paddingLeft={'15vw'}
        />
        
      </div>
    );
  }
}
export default App;
