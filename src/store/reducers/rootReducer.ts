import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer.ts";

export const rootReducer = combineReducers({
  books: booksReducer,
})
export type RootState = ReturnType<typeof rootReducer>