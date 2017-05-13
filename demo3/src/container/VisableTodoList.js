/**
 * Created by vanessa on 2017/5/13.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { toggleTodo, removeTodo } from '../actions/todos'
import TodoList from '../components/TodoList'

/*const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.done)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.done)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
 */
const mapStateToProps = (state) => ({
    todos: state.todos
})

/**
 *传递的是一个函数，该函数将接收一个 dispatch 函数，
 * 然后由你来决定如何返回一个对象，这个对象通过
 * dispatch 函数与 action creator 以某种方式绑定在一起
 */
/*const mapDispatchToProps = dispatch => ({
    onTodoClick: bindActionCreators(toggleTodo, dispatch)
})*/

/**
 * 作为对象情况：定义在该对象的函数（例如toggleTodo）将被当作
 * Redux action creator，而且这个对象会与 Redux store
 * 绑定在一起，其中所定义的方法名将作为属性名，
 * 合并到组件的 props 中
 * @type {{onTodoClick: toggleTodo}}
 */
const mapDispatchToProps = {
    onTodoClick: toggleTodo,
    removeTodo: removeTodo,
}

/**
 * 如果你省略这个 mapDispatchToProps 参数，
 * 默认情况下，dispatch 会注入到你的组件 props 中
 */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
