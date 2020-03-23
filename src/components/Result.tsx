import React from "react";

interface ButtonArgument {
  title: string;
  r: number;
}

const Result = ({ title, r }: ButtonArgument) => (
  <div>
    {title}: <span>{r}</span>
  </div>
);

export default Result;
