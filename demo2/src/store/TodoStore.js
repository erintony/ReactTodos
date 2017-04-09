import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import EventEmiter from 'events';

const CHANGE_EVENT = 'change';

//定义初始数据
let _store = {
	items: [],
	all_done: false
}

/**
* 定义公共的事件监听和获取数据的getter
* 
*/
class TodoStoreClass extends EventEmiter {

	addChangeListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener(cb) {
		this.removeChangeListener(CHANGE_EVENT, cb);
	}

	getList() {
		return _store;
	}

}


/**
*  Registers a callback to be invoked with every dispatched payload.
*  Returns a token that can be used with waitFor().
*/
AppDispatcher.register(
	function(payload){
	const action = payload.action;

	switch(action.actionType) {

		case TodoConstants.NEW_ITEM:
			_store.items.push(action.item);
			TodoStore.emit(CHANGE_EVENT);
			break;

		case TodoConstants.REMOVE_ITEM:
			_store.items = _store.items.filter((item,index)=>{
				return index != action.index;
			});
			TodoStore.emit(CHANGE_EVENT);
			break;

		case TodoConstants.MARK_ALL_TOGGLE:
            _store.all_done = !_store.all_done;
            _store.items.forEach((item)=>{
                item.done = _store.all_done;
            });
            TodoStore.emit(CHANGE_EVENT);
            break;

        case TodoConstants.CLEAR_COMPLETED:
            /**
             * clear done items
             */
            let items = _store.items.filter((item,index)=>{
                return !item.done;
            });
            _store.items = items;
            TodoStore.emit(CHANGE_EVENT);

	}
});


const TodoStore = new TodoStoreClass();
export default TodoStore;
