import React from "react";
import Typist from "react-typist";
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
