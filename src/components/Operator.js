import React from "react";

export const Operator = ({op, symbol}) => {
    return (
        <button id={op}>{symbol}</button>
    )
}