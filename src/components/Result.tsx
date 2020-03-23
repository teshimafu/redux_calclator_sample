import React from "react";

interface ResultArgument {
  title: string;
  result: number;
}

const Result = ({ title, result }: ResultArgument) => (
  <div>
    {title}: <span>{result}</span>
  </div>
);

export default Result;
