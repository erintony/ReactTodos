/**
 * Created by vanessa on 2017/5/13.
 */
import contants from "../constants/TodoConstants";

export function add(text) {
    return {
        type: contants.NEW_ITEM,
        text,
    }
};

export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    index
});

export const removeTodo = (index) => ({
    type: contants.REMOVE_ITEM,
    index
});

export const toggleAll = (done) =>({
    type: contants.MARK_ALL_TOGGLE,
    done
});

export const clearCompleted = () => ({
    type: contants.CLEAR_COMPLETED
});

export const edit = (index) => ({
    type: contants.EDIT_TODO,
    index
});

export const close = (index) => ({
    type: contants.CLOSE_EDIT,
    index
});