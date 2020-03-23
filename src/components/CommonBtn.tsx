import React from "react";

interface ButtonArgument {
  w: string;
  onClick: () => void;
}

const CommonBtn = ({ w, onClick }: ButtonArgument) => <button onClick={() => onClick()}>{w}</button>;

export default CommonBtn;
