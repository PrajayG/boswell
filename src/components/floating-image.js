import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image"

export default class FloatingImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string
  };

  // http://jsfiddle.net/j2PAb/ <-- rewrite this in native js


  makeNewPosition(container) {

    let h = container.offsetWidth;
    let w = container.offsetHeight;

    let nh = Math.trunc(Math.floor(Math.random() * h));
    let nw = Math.trunc(Math.floor(Math.random() * w));
    console.log([nh, nw])
    return [nh, nw];
  };

  animateDiv(target) {
    console.log(target.parentElement);
    let newq = this.makeNewPosition(target.parentElement);
    let oldq = target.getBoundingClientRect();


    console.log(oldq ,'old q');
    console.log(newq, 'new q');
    let speed = this.calcSpeed([oldq.top, oldq.left], newq);

    target.animate([
      { top: Math.trunc(oldq.top)+'px', left: Math.trunc(oldq.left)+'px', opacity: 0 },
      { top: newq[0]+'px', left: newq[1]+'px', opacity: 1 }
    ], {
      // timing options
      duration: 10000,
      iterations: 3
    })

  }

  calcSpeed(prev, next) {

    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);

    let greatest = x > y ? x : y;

    let speedModifier = 1000;

    let speed = Math.ceil(greatest / speedModifier);

    return speed;

  }

  render() {

    return (
      <div className="floating-image" >
        <StaticImage src="../images/1.png" alt="" />
      </div>
    )
  }

  componentDidMount() {
    let target = document.querySelector('.floating-image');
    console.log(target)
    this.animateDiv(target);

  }

}
