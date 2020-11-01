import React from "react";

const ClockDate = (props) => {
  return <h1>{new Date(props.date).toLocaleDateString()}</h1>;
};

export default ClockDate;
