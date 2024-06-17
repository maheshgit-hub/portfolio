import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className=" text-cyan-50 text-3xl">
      <Typewriter
        options={{
          strings: ['Web Developer', 'MERN Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed
