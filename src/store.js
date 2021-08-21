import { createStore, combineReducers } from "redux";

import todos from "./Reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
