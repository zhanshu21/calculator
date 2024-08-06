import React from "react";
import { ACTIONS } from "../App";

export const Operator = ({ op, symbol, dispatch }) => {
  return (
    <button
      id={op}
      onClick={() => {dispatch({ type: ACTIONS.ADD_OPERATION, payload: { symbol } })}}
    >
      {symbol}
    </button>
  );
};
