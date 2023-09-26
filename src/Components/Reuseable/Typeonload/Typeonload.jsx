import React from "react";
import Typewriter from "typewriter-effect";

function Typeonload(props) {
  const { text, delay } = props;

  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: true,
        pauseFor: delay,
      }}
    />
  );
}
export default Typeonload;
