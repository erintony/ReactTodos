/**
 * Created by vanessa on 2017/5/2.
 * header reducer
 */
import TodoContants from '../constants/TodoConstants';

const defaultState = {
    todos: [],
    allDone: false,
}
function header (state = defaultState, action) {
    let newState = state;
    switch (action.type) {
        case TodoContants.NEW_ITEM:
            let todo = {text: action.text, done: false}
            newState.todos.push(todo);
            break;
        default:
            break;
    }
    return state;

}

export default header;