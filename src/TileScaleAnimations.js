import {TweenMax, Elastic} from 'gsap'
export default {

  scale(target, duration, amount, cb) {
    return TweenMax.to(`.${target}`, duration, {
     width: amount,
      onComplete() {
      }
    })
  },
  opacity(target, duration, amount, cb) {
    return TweenMax.to(`.${target}`, duration, {
     opacity: amount,
      onComplete() {
      }
    })
  },
  
 
}