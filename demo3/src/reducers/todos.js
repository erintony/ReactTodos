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

export function todos (state = [], action) {
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

        case TodoContants.MARK_ALL_TOGGLE:
            state.map((todo) => {
                todo.done = action.done;
                return todo;
            });
            return newstate;

        case TodoContants.CLEAR_COMPLETED:
            return state.filter( todo => !todo.done);

        case TodoContants.EDIT_TODO:
            newstate[action.index].editing = true;
            return newstate;

        case TodoContants.CLOSE_EDIT:
            newstate[action.index].editing = false;
            return newstate;

        default:
            return state;
    }

}

export const allDone = (state = false, action) => {
    if(action.type === TodoContants.MARK_ALL_TOGGLE){
        return !state;
    }
    return state;
};