import { OPT, Calculator } from "src/services/CalculatorService";

const INPUT_NUMBER = "INPUT_NUMBER";
const OPERATION = "OPERATION";
const EQUAL = "EQUAL";
const RESET = "RESET";

const onNumClick = (number: number) => ({
  type: INPUT_NUMBER,
  number
});

const onOperationClick = (opt: OPT) => ({
  type: OPERATION,
  opt
});

const onEqualClick = () => ({
  type: EQUAL
});

const onResetClick = () => ({
  type: RESET
});

export type ClickActions =
  | ReturnType<typeof onNumClick>
  | ReturnType<typeof onOperationClick>
  | ReturnType<typeof onEqualClick>
  | ReturnType<typeof onResetClick>;

export interface AppState {
  inputValue: number;
  resultValue: number;
  temporaryValue: number;
  lastOperation?: OPT;
  showingResult: boolean;
}

export const GetAllActions = {
  onNumClick: onNumClick,
  onOperationClick: onOperationClick,
  onEqualClick: onEqualClick,
  onResetClick: onResetClick
};

const initialAppState: AppState = {
  inputValue: 0,
  temporaryValue: 0,
  resultValue: 0,
  showingResult: false
};

const calculator = (state = initialAppState, action: ClickActions) => {
  switch (action.type) {
    case INPUT_NUMBER:
      const numAction = action as ReturnType<typeof onNumClick>;
      return {
        ...state,
        inputValue: state.inputValue * 10 + numAction.number,
        showingResult: false
      };
    case OPERATION:
      const opAction = action as ReturnType<typeof onOperationClick>;
      const temp = state.lastOperation
        ? Calculator(state.lastOperation, state.temporaryValue, state.inputValue)
        : state.showingResult
        ? state.resultValue
        : state.inputValue;
      return {
        ...state,
        inputValue: 0,
        temporaryValue: temp,
        resultValue: 0,
        lastOperation: opAction.opt
      };
    case EQUAL:
      if (state.showingResult) {
        return state;
      }
      const result = state.lastOperation
        ? Calculator(state.lastOperation, state.temporaryValue, state.inputValue)
        : state.inputValue;
      return {
        ...state,
        inputValue: 0,
        temporaryValue: 0,
        resultValue: result,
        lastOperation: undefined,
        showingResult: true
      };
    case RESET:
      return initialAppState;
    default:
      return state;
  }
};

export default calculator;
