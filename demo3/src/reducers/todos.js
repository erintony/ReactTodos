/**
 * Created by Erin on 2017/5/12.
 */
import TodoContants from '../constants/TodoConstants';

const todo = (state, action) => {
    switch (action.type) {
        case TodoContants.NEW_ITEM:
            return {
                text: action.text,
                done: false,
                editing: false,
            }
    }
}

function todos (state = [], action) {

    switch (action.type) {
        case TodoContants.NEW_ITEM:
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state;
    }

}

export default todos;