import React from "react";
import { ACTIONS } from "../App";

export const Decimal = ({ dispatch }) => {
  return (
    <button
      id="decimal"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DECIMAL, payload: { decimal: "." } });
      }}
    >
      .
    </button>
  );
};
