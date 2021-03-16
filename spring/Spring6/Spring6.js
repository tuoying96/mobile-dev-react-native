// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

import { render } from "react-dom";
import React from "react";
import { useSpring, animated } from "react-spring";
import { add, scale } from "vec-la";
import { useGesture } from "react-use-gesture";
import "./styles.css";

export default class Spring5 extends React.Component {
  render() {
    return <Decay></Decay>;
  }
}

function Decay() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  // direction calculates pointer direction
  // temp is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add delta to it for convenience
  const bind = useGesture({
    onDrag: ({ down, delta, velocity, direction, temp = xy.getValue() }) => {
      set({
        xy: add(delta, temp),
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      });
      return temp;
    },
  });
  return (
    <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
    />
  );
}
// render(<App />, document.getElementById('root'))
