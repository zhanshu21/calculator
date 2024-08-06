import "./App.css";
import React, { useReducer } from "react";
import { Equals } from "./components/Equals";
import { Digit } from "./components/Digit";
import { Operator } from "./components/Operator";
import { Decimal } from "./components/Decimal";
import { Clear } from "./components/Clear";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  ADD_DECIMAL: "add-decimal",
  ADD_OPERATION: "add-operation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};

const initialState = { input: "", output: "", operation: "" };

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.output === "0") {
        return {
          ...state,
          output: `${payload.num}`,
        };
      }
      return {
        ...state,
        output: `${state.output || ""}${payload.num}`,
      };
    case ACTIONS.CLEAR:
      return {
        ...initialState,
        output: "0",
      };
    case ACTIONS.ADD_DECIMAL:
      if (state.output === '') {
        return {
          ...state,
          output: `0${payload.decimal}`,
        };
      }
      if (state.output.includes(".")) {
        return state;
      }
      return {
        ...state,
        output: `${state.output || ""}${payload.decimal}`,
      };
    case ACTIONS.ADD_OPERATION:
      // handle negative operator
      if (payload.symbol === '-' && (state.output === '' || state.output === '0') && !state.operation) {
        return {
          ...state,
          output: `${payload.symbol}`
        };
      }
      if (state.input === '' && state.output === '') {
        return state;
      }
      // if (state.output === '' && state.operation && payload.symbol === '-') {
      //   return {
      //     ...state,
      //     output: `${payload.symbol}`
      //   };
      // }
      // if (state.output === '-') {
      //   return {
      //     ...state,
      //     opration: payload.symbol,
      //     output: ''
      //   }
      // }
      if (state.output === '' ) {
        return {
          ...state,
          opration: payload.symbol
        };
      }
      if (state.input === '') {
        return {
          ...state,
          input: state.output,
          operation: payload.symbol,
          output: ''
        }
      }
      return {
        ...state,
        operation: payload.symbol,
        input: calc(state),
        output: ''
      };
    case ACTIONS.EVALUATE:
      return {
        ...initialState,
        output: calc(state)
      }
    default:
      return state;
  }
}

function calc({ input, output, operation }) {
    let inputFloat = parseFloat(input);
    let outputFloat = parseFloat(output);
    switch (operation) {
      case "+" : return (inputFloat + outputFloat).toString();
      case "-" : return (inputFloat - outputFloat).toString();
      case "*" : return (inputFloat * outputFloat).toString();
      case "/" : return (inputFloat / outputFloat).toString();
      default: return '';
    }
}

function App() {
  const [{ input, output, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="calculator">
      <div id="display-container" className="display-container">
        <div className="input" id="input-display">
          {input} {operation}
        </div>
        <div className="output" id="display">
          {output}
        </div>
      </div>
      <Clear dispatch={dispatch} />
      <Operator op="divide" symbol="/" dispatch={dispatch} />
      <Operator op="multiply" symbol="*" dispatch={dispatch} />
      <Digit num="7" numId="seven" dispatch={dispatch} />
      <Digit num="8" numId="eight" dispatch={dispatch} />
      <Digit num="9" numId="nine" dispatch={dispatch} />
      <Operator op="subtract" symbol="-" dispatch={dispatch} />
      <Digit num="4" numId="four" dispatch={dispatch} />
      <Digit num="5" numId="five" dispatch={dispatch} />
      <Digit num="6" numId="six" dispatch={dispatch} />
      <Operator op="add" symbol="+" dispatch={dispatch} />
      <Digit num="1" numId="one" dispatch={dispatch} />
      <Digit num="2" numId="two" dispatch={dispatch} />
      <Digit num="3" numId="three" dispatch={dispatch} />
      {/* <Equals /> */}
      <Digit num="0" numId="zero" dispatch={dispatch} />
      <Decimal dispatch={dispatch} />
      <Equals dispatch={dispatch} />
    </div>
  );
}

export default App;
