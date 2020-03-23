export type OPT = "DIV" | "MUL" | "ADD" | "SUB";

export const Calculator = (opt: OPT, firstNumber: number, secondNumber: number) => {
  switch (opt) {
    case "DIV":
      return firstNumber / secondNumber;
    case "MUL":
      return firstNumber * secondNumber;
    case "ADD":
      return firstNumber + secondNumber;
    case "SUB":
      return firstNumber - secondNumber;
    default:
      return 0;
  }
};
