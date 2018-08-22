import TileMoveAnimations from "./TileMoveAnimations";
import TileScaleAnimations from "./TileScaleAnimations";

export default

{ expand (animationIndex, className, rowAmount, id) {
    let stepWidth2 = -(window.innerHeight / 20) * 2;
    let stepWidth1 = -(window.innerHeight / 40) * 2;
    let stepHeight2 = -(window.innerHeight / 20) * 2;
    let stepHeight1 = -(window.innerHeight / 40) * 2;
    let duration = 0.3;
    // // let { rowAmount, animationIndex } = this.props;
    // let id = this.state.id;
 
    if (animationIndex === 100 || animationIndex === id) {
      TileMoveAnimations.left(className, duration, 0, 1, 1);
      TileMoveAnimations.down(className, duration, 0, 1, 1);
    } else {
      let distanceFromMultiple = id % rowAmount;
      let distanceFromClicked = id - animationIndex;
      //moves left column
      if (distanceFromMultiple === 0) {
          console.log('in distance from multiple')
        switch (distanceFromClicked) {
          case -8:
          console.log("above 2 left 2 from right");
          TileMoveAnimations.left(className, duration, stepWidth2);
          TileMoveAnimations.up(className, duration, stepWidth2);
          break;
          case -7:
            console.log("above 2 left 1 from middle");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -6:
            console.log("above 2 from left");
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -5:
            console.log("above 1 left 2 from right");
           TileMoveAnimations.left(className, duration, stepWidth2);
           TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -4:
            console.log("above 1 left 1 from middle");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -3:
            console.log("above 1 from left");
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -2:
            console.log("two left from right");
          TileMoveAnimations.left(className, duration, stepWidth2);
          
            break;
          case -1:
            console.log("one left from middle");
            TileMoveAnimations.left(className, duration, stepWidth1);
            break;
          case 0:
            console.log("clicked element");
            TileMoveAnimations.left(className, duration, stepWidth2);
            break;
          case 1:
            console.log("one row down two left from right");
            TileMoveAnimations.left(className, duration, stepWidth2);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 2:
            console.log("one down one left from middle");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 3:
            console.log("one row down from left");
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 4:
            console.log("two down two across from right");
            TileMoveAnimations.left(className, duration, stepWidth2);
            TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 5:
            console.log("two down one across from middle");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 6:
            console.log("two down from left");
          TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 7:
            console.log("Nothing");
            // TileMoveAnimations.left(className, duration, stepWidth2);
            break;
        }
      }
      //move middle column
      else if (distanceFromMultiple === 1) {
        switch (distanceFromClicked) {
          case -7:
            console.log("above 2 left 1 from middle");
           TileMoveAnimations.left(className, duration, stepWidth1);
           TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -6:
            console.log("above 2 from middle");
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -5:
            console.log("above 2 right 1 from left");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -4:
            console.log("above 1 left 1 from right");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -3:
            console.log("above 1 from middle");
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -2:
            console.log("one up one right from left");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -1:
            console.log("one left from right");
              TileMoveAnimations.left(className, duration, stepWidth1);
            break;
          case 0:
            console.log("clicked element");
            //TileMoveAnimations.left(className, duration, stepWidth2);
            break;
          case 1:
            console.log("one row right from left");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            break;
          case 2:
            console.log("one down one left from right");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 3:
            console.log("one row down from middle");
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 4:
            console.log("one down one across from left");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 5:
            console.log("two down one across from right");
            TileMoveAnimations.left(className, duration, stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 6:
            console.log("two down from middle");
            TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 7:
            console.log("two down one across from left");
             TileMoveAnimations.left(className, duration, -stepWidth1);
             TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
        }
      }
      //move right column
      else if (distanceFromMultiple === 2) {
        switch (distanceFromClicked) {
          case -7:
            console.log("above 2 left 1 from middle");
            TileMoveAnimations.left(className, duration, stepWidth2);
            break;
          case -6:
            console.log("above 2 from right");
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -5:
            console.log("above 2 right 1 from middle");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -4:
            console.log("above 2 right 2 from left");
            TileMoveAnimations.left(className, duration, -stepWidth2);
            TileMoveAnimations.up(className, duration, stepWidth2);
            break;
          case -3:
            console.log("above 1 from right");
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -2:
            console.log("one right one up from middle");
           TileMoveAnimations.left(className, duration, -stepWidth1);
           TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case -1:
            console.log("one up two right from left");
            TileMoveAnimations.left(className, duration, -stepWidth2);
            TileMoveAnimations.up(className, duration, stepWidth1);
            break;
          case 0:
            console.log("clicked element");
            TileMoveAnimations.left(className, duration, stepWidth2);
            break;
          case 1:
            console.log("one right from middle");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            break;
          case 2:
            console.log("two right from left");
            TileMoveAnimations.left(className, duration, -stepWidth2);
            break;
          case 3:
            console.log("one row down from right");
         TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 4:
            console.log("two down two across from right");
            TileMoveAnimations.left(className, duration, -stepWidth1);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 5:
            console.log("one down two across from middle");
            TileMoveAnimations.left(className, duration, -stepWidth2);
            TileMoveAnimations.up(className, duration, -stepWidth1);
            break;
          case 6:
            console.log("two down from right");
         TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 7:
            console.log("two down one rigth from middle");
          TileMoveAnimations.left(className, duration, -stepWidth1);
          TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
          case 8:
            console.log("two down two rigth from left");
            TileMoveAnimations.left(className, duration, -stepWidth2);
            TileMoveAnimations.up(className, duration, -stepWidth2);
            break;
        }
      }
    }
  },
  hello(){
      console.log('im in the module sayign hello');
  }
}