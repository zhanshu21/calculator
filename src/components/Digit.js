import { ACTIONS } from "../App";
import React from "react";

export const Digit = ({ num, numId, dispatch}) => {
  return <button className="digit" id={numId} onClick={() => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { num } })
  }}>{num}</button>;
};
