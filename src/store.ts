import { combineReducers, createStore } from "redux";
import calculator from "./modules/CalculatorContainer";

// 全てのReducerが集約される。Reducerが増えたらここに追加する
export const rootReducer = combineReducers({
  calculator
});

// 全てのStatusが集約される。書き換え不要
export type AllState = ReturnType<typeof rootReducer>;

// Reactとreduxをつなぐためのstoreを作成。書き換え不要
const store = createStore(rootReducer);

export default store;
