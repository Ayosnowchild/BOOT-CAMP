import React from "react";

function DevTrack({ text }) {
  return (
    <>
      <div className=" flex">
        <img src="./Files/blue-tick.png" alt="" class="tick" />
        <span>{text}</span>
      </div>
    </>
  );
}

export default DevTrack;
