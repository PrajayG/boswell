import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default class FloatingImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string,
  };

  // http://jsfiddle.net/j2PAb/ <-- rewrite this in native js

  makeNewPosition(container) {
    let h = container.offsetWidth;
    let w = container.offsetHeight;

    let nh = Math.trunc(Math.floor(Math.random() * h));
    let nw = Math.trunc(Math.floor(Math.random() * w));
    console.log([nh, nw]);
    return [nh, nw];
  }

  logger() {
    console.log("logged");
  }

  counter = 4;

  animateDiv(target) {
    console.log(target);
    let newq = this.makeNewPosition(target.parentElement);
    let oldq = target.getBoundingClientRect();
    // let speed = this.calcSpeed([oldq.top, oldq.left], newq);

    let animation = target.animate(
      [
        {
          top: Math.trunc(oldq.top) + "px",
          left: Math.trunc(oldq.left) + "px",
          opacity: 0,
          transform: "scale(0.1)",
        },
        {
          top: newq[0] + "px",
          left: newq[1] + "px",
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        // timing options
        duration: 5000,
        iterations: 1,
      }
    );

    animation.onfinish = () => {
      this.counter++;
      this.animateDiv(target);
    };
  }

  render() {

    const rndInt = Math.floor(Math.random() * 4) + 1

    return (
      <div className="floating-image">
        <GatsbyImage image={`../images/${rndInt}.png`} src={`../images/${rndInt}.png`} alt="" />
      </div>
    );
  }

  componentDidMount() {
    let target = document.querySelector(".floating-image");
    console.log(this);
    this.animateDiv(target);
  }
}
