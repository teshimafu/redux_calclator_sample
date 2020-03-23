import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NumBtn from "../components/NumBtn";
import Result from "../components/Result";
import { GetAllActions } from "../modules/CalculatorContainer";
import { AllState } from "src/store";
import OperationButton from "src/components/OperationButton";
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
        <NumBtn n={1} onClick={onNumClick} />
        <NumBtn n={2} onClick={onNumClick} />
        <NumBtn n={3} onClick={onNumClick} />
        <OperationButton w={"/"} opt={"DIV"} onClick={onOperationClick} />
      </div>
      <div>
        <NumBtn n={4} onClick={onNumClick} />
        <NumBtn n={5} onClick={onNumClick} />
        <NumBtn n={6} onClick={onNumClick} />
        <OperationButton w={"*"} opt={"MUL"} onClick={onOperationClick} />
      </div>
      <div>
        <NumBtn n={7} onClick={onNumClick} />
        <NumBtn n={8} onClick={onNumClick} />
        <NumBtn n={9} onClick={onNumClick} />
        <OperationButton w={"+"} opt={"ADD"} onClick={onOperationClick} />
      </div>
      <div>
        <CommonBtn w={"c"} onClick={onResetClick} />
        <NumBtn n={0} onClick={onNumClick} />
        <CommonBtn w={"="} onClick={onEqualClick} />
        <OperationButton w={"-"} opt={"SUB"} onClick={onOperationClick} />
      </div>
      <Result title={"Temporary"} r={calculator.temporaryValue} />
      <Result title={"Result"} r={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
    </div>
  );
};
