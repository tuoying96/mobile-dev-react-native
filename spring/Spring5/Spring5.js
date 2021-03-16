// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";
import "./styles.css";

export default class Spring5 extends React.Component {
  render() {
    return <Loading></Loading>;
  }
}

function Loading() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? "hotpink" : "turquoise",
    config: { duration: 1000 },
  });

  return (
    <div {...bind} class="main" onClick={() => toggle(!open)}>
      <animated.div class="fill" style={props} />
      <animated.div class="content">
        {props.width.interpolate((x) =>
          Math.floor((x.toFixed(0) * 100) / width)
        )}
      </animated.div>
    </div>
  );
}

// render(<App />, document.getElementById('root'))
