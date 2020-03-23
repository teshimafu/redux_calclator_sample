import React from "react";

interface ButtonArgument {
  character: string | number;
  onClick: () => void;
}

const CommonBtn = ({ character, onClick }: ButtonArgument) => <button onClick={onClick}>{character}</button>;

export default CommonBtn;
