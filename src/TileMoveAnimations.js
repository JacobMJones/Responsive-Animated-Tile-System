import {TweenMax, Back, SlowMo} from 'gsap'
export default {

  up(target, duration, distance, opacity, delay, cb) {
    return TweenMax.to(`.${target}`, duration, {
      top: distance,
      opacity:opacity,
      ease:Back.easeInOut,
      delay: .1,
      onComplete() {
      }
    })
  },
  down(target, duration, distance, opacity, delay, cb) {
    return TweenMax.to(`.${target}`, duration, {
      top: distance,
      opacity:opacity,
      ease:Back.easeInOut,
      delay: .1,
      onComplete() {
      }
    })
  },
  right(target, duration, distance, delay, cb) {
    return TweenMax.to(`.${target}`, duration, {
      left: distance,
      ease:Back.easeInOut,
      delay: .1,
      onComplete() {
      }
    })
  },
  left(target, duration, distance, delay, cb) {
    return TweenMax.to(`.${target}`, duration, {
      left: distance,
      ease:Back.easeInOut,
      delay: .1,
      onComplete() {
      }
    })
  },
  flip (target, duration, delay) {
    return TweenMax.to(`.${target}`, duration, {
      rotationY:'+=180',
      onComplete() {
      }
    })
  },
 
}
