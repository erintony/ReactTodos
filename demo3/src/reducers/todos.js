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
        case 'TOGGLE_TODO':
            return {
                ...state,
                done: !state.done
            }
    }
}

function todos (state = [], action) {
    let newstate = [...state];
    switch (action.type) {
        case TodoContants.NEW_ITEM:
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':

            newstate.splice(action.index, 1, todo(state[action.index], action));
            return newstate;

        case TodoContants.REMOVE_ITEM:
            newstate.splice(action.index, 1);
            return newstate;
        default:
            return state;
    }

}

export default todos;