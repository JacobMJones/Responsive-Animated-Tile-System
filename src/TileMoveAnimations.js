import {TweenMax, Back, SlowMo} from 'gsap'
export default {

  up(target, duration, distance, opacity, scale, cb) {
    return TweenMax.to(`.${target}`, duration, {
      top: distance,
      // rotationY:'+=180',
      opacity:opacity,
      scale:scale,
      ease:Back.easeInOut,
      onComplete() {
      }
    })
  },
  down(target, duration, distance, opacity,scale, cb) {
    return TweenMax.to(`.${target}`, duration, {
      top: distance,
      scale:scale,
      opacity:opacity,
      ease:Back.easeInOut,
      onComplete() {
      }
    })
  },
  right(target, duration, distance,scale, cb) {
    return TweenMax.to(`.${target}`, duration, {
      left: distance,
      scale:scale,
      ease:Back.easeInOut,
      onComplete() {
      }
    })
  },
  left(target, duration, distance,scale, cb) {
    return TweenMax.to(`.${target}`, duration, {
      left: distance,
      ease:Back.easeInOut,
      // rotationY:'+=180',
      onComplete() {
      }
    })
  },
 
}
