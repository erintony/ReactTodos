/**
 * Created by erin on 2017/5/7.
 */

import { combineReducers } from "redux";
import header from "./header";

const app = combineReducers({
    newtodo:header,

});
export default app;