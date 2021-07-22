import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
