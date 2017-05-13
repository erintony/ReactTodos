/**
 * Created by erin on 2017/5/7.
 */

import { combineReducers } from "redux";
import todos from "./todos";

const app = combineReducers({
    todos,

});
export default app;