
import React from "react";
import { ACTIONS } from "../App";

export const Equals = ({ dispatch }) => {
  return (
    <button
      className="equals"
      id="equals"
      onClick={() => {
        dispatch({ type: ACTIONS.EVALUATE });
      }}
    >
      =
    </button>
  );
};
