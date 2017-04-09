import { Dispatcher } from 'flux';

class AppDispatcherClass extends Dispatcher {
	handleViewAction(action) {
		//Dispatches a payload to all registered callbacks.
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
}

const AppDispatcher = new AppDispatcherClass();

export default AppDispatcher;