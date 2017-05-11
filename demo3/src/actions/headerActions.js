/**
 * Created by user on 2017/5/7.
 */
import contants from "../constants/TodoConstants";

export function add(text) {
    return {
        type: contants.NEW_ITEM,
        payload: {
            text: text,
            done: false,
        }
    }
}
