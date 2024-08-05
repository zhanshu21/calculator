import "./App.css";
import React from "react";
import { Equals } from "./components/Equals";
import { Digit } from "./components/Digit";
import { Operator } from "./components/Operator";
import { Decimal } from "./components/Decimal";
import { Clear } from "./components/Clear";

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const operators = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

function App() {
  return (
    <div className="App">
      <Equals />
      {numberWords.map((numId, num) => (
        <Digit key={numId} num={num} numId={numId} />
      ))}
      {Object.entries(operators).map(([k, v]) => (
        <Operator key={k} op={k} symbol={v} />
      ))}
      <Decimal />
      <Clear />
      <div className="display" id="display">display</div>
    </div>
  );
}

export default App;
