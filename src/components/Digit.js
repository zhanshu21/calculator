import React from "react";

export const Digit = ({ num, numId }) => {
  return <button className="digit" id={numId}>{num}</button>;
};
