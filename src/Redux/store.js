import { createStore,applyMiddleware } from "redux";
import reducer from "./Stickers/reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

export default createStore(reducer,composeWithDevTools(applyMiddleware(logger,thunk)));
