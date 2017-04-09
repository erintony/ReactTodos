import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

class TodosActionClass {

	/**
	* add a item
	* called in header
	*/
	addItem(item) {
		AppDispatcher.handleViewAction({
			actionType: TodoConstants.NEW_ITEM,
			item: item
		});
	}

    /**
     * click X destroy(remove) an item
     */
	removeItem(index) {
		AppDispatcher.handleViewAction({
			actionType: TodoConstants.REMOVE_ITEM,
			index: index
		});
	}

    /**
     * Mark all as complete
     */
    markAllToggle(){
        AppDispatcher.handleViewAction({
			actionType: TodoConstants.MARK_ALL_TOGGLE
		});
    }

    /**
     * clear done items
     */
    clearCompleted(){
        AppDispatcher.handleViewAction({
            actionType:TodoConstants.CLEAR_COMPLETED
        });
    }

    /**
     * 一个item checkbox点击事件
     */
    toggleDone(index){
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TOGGLE_DONE,
            index: index
        });
    }

}

const TodosAction = new TodosActionClass();
export default TodosAction;