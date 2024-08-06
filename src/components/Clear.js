import React from "react";
import { ACTIONS } from "../App";

export const Clear = ({ dispatch }) => {
  return (
    <button
      id="clear"
      className="clear"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    >
      AC
    </button>
  );
};
