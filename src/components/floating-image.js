import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

export default class FloatingImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string
  };

  // http://jsfiddle.net/j2PAb/ <-- For animating, just rewrite this in native js


  makeNewPosition(container) {

    let h = container.offsetWidth - 50;
    let w = container.offsetHeightq - 100;

    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);

    return [nh, nw];
  };

  animateDiv(target) {
    console.log(target.parentElement)
    var newq = this.makeNewPosition(target.parentElement);
    var oldq = target.offset;

    var speed = this.calcSpeed([oldq.top, oldq.left], newq);
    console.log(speed);
    target.animate([
      { top: oldq.top, left: oldq.left },
      { top: newq[0], left: newq[1] }
    ], {
      //timing options
      duration: speed,
      iterations: Infinity
    })

    // $target.animate({
    //     top: newq[0],
    //     left: newq[1]
    // }, speed, function() {
    //     animateDiv($target);
    // });

  };

  calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.4;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

  }

  render() {

    return (
      <div className="floating-image" >
        {this.props.image}
        <StaticImage src="../images/1.png" alt="" />
        Here is some random text
      </div>
    )
  }

  componentDidMount() {
    let target = document.querySelector('.floating-image');
    console.log(target)
    this.animateDiv(target);
  }

}
