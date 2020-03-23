import React from "react";
import { OPT } from "src/services/CalculatorService";

interface ButtonArgument {
  w: string | number;
  opt: OPT;
  onClick: (opt: OPT) => void;
}

const CalculatorButton = ({ w, opt, onClick }: ButtonArgument) => <button onClick={() => onClick(opt)}>{w}</button>;

export default CalculatorButton;
