import React from "react";

const ClockTime = (props) => {
  return <h1>{new Date(props.date).toLocaleTimeString()}</h1>;
};

export default ClockTime;
