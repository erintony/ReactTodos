/**
 * Created by erin on 2017/5/7.
 */

import { combineReducers } from "redux";
import { todos, allDone } from "./todos";

const app = combineReducers({
    todos,
    allDone,
});
export default app;