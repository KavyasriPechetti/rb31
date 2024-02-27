import { createStore } from "redux";
import regReducer from "./reducers/regReducer";

const store= createStore(regReducer)

export default store