import HomeSaga from "./Saga";
import Reducer from "./Reducer";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: Reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(HomeSaga);
export default store;
