import "./App.css";
import React from "react";
import { Equals } from "./components/Equals";
import { Digit } from "./components/Digit";
import { Operator } from "./components/Operator";
import { Decimal } from "./components/Decimal";
import { Clear } from "./components/Clear";

// const numberWords = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// const operators = {
//   add: "+",
//   subtract: "-",
//   multiply: "*",
//   divide: "/",
// };

function App() {
  return (
    <div className="calculator">
      <div className="display" id="display">display</div>
      <Clear />
      <Operator op="divide" symbol="/" />
      <Operator op="multiply" symbol="*" />
      <Digit num="7" numId="seven"/>
      <Digit num="8" numId="eight"/>
      <Digit num="9" numId="nine"/>
      <Operator op="subtract" symbol="-" />
      <Digit num="4" numId="four"/>      
      <Digit num="5" numId="five"/>
      <Digit num="6" numId="six"/>
      <Operator op="add" symbol="+" /> 
      <Digit num="1" numId="one"/>
      <Digit num="2" numId="two"/>
      <Digit num="3" numId="three"/>
      {/* <Equals /> */}
      <Digit num="0" numId="zero"/>
      <Decimal />
      <Equals />
      {/* {numberWords.map((numId, num) => (
        <Digit key={numId} num={num} numId={numId} />
      ))}
      {Object.entries(operators).map(([k, v]) => (
        <Operator key={k} op={k} symbol={v} />
      ))} */}  
    </div>
  );
}

export default App;
