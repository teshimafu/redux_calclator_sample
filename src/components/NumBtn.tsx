import React from "react";

interface ButtonArgument {
  n: number;
  onClick: (n: number) => void;
}

const NumBtn = ({ n, onClick }: ButtonArgument) => <button onClick={() => onClick(n)}>{n}</button>;

export default NumBtn;
