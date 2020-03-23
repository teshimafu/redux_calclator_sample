import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "../components/Result";
import { GetAllActions } from "../modules/CalculatorContainer";
import { AllState } from "src/store";
import { OPT } from "src/services/CalculatorService";
import CommonBtn from "src/components/CommonBtn";

export const CalculatorContainer = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state: AllState) => state.calculator);
  const onNumClick = (number: number) => {
    dispatch(GetAllActions.onNumClick(number));
  };
  const onOperationClick = (opt: OPT) => {
    dispatch(GetAllActions.onOperationClick(opt));
  };
  const onEqualClick = () => {
    dispatch(GetAllActions.onEqualClick());
  };
  const onResetClick = () => {
    dispatch(GetAllActions.onResetClick());
  };
  return (
    <div>
      <div>
        <CommonBtn character={1} onClick={() => onNumClick(1)} />
        <CommonBtn character={2} onClick={() => onNumClick(2)} />
        <CommonBtn character={3} onClick={() => onNumClick(3)} />
        <CommonBtn character={"/"} onClick={() => onOperationClick("DIV")} />
      </div>
      <div>
        <CommonBtn character={4} onClick={() => onNumClick(4)} />
        <CommonBtn character={5} onClick={() => onNumClick(5)} />
        <CommonBtn character={6} onClick={() => onNumClick(6)} />
        <CommonBtn character={"*"} onClick={() => onOperationClick("MUL")} />
      </div>
      <div>
        <CommonBtn character={7} onClick={() => onNumClick(7)} />
        <CommonBtn character={8} onClick={() => onNumClick(8)} />
        <CommonBtn character={9} onClick={() => onNumClick(9)} />
        <CommonBtn character={"+"} onClick={() => onOperationClick("ADD")} />
      </div>
      <div>
        <CommonBtn character={"c"} onClick={onResetClick} />
        <CommonBtn character={0} onClick={() => onNumClick(0)} />
        <CommonBtn character={"="} onClick={onEqualClick} />
        <CommonBtn character={"-"} onClick={() => onOperationClick("SUB")} />
      </div>
      <Result title={"Temporary"} result={calculator.temporaryValue} />
      <Result title={"Result"} result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
    </div>
  );
};
