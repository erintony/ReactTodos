import React from 'React'

class TodoHeader extends React.Component {

	//绑定键盘回车事件，添加新任务
	handlerKeyUp(e) {
		if(e.keyCode == 13){
			let value = e.target.value;
			if(!value) return false;

			let newTodoItem = {
				text:value,
				isDone:false
			};

			e.target.value = "";
			//通过 this.props 来调用父组件传递过来的addTodo方法
			this.props.addTodo(newTodoItem);
		}
	}	

	render() {
		return(
			<div className="todo-header form-group"> 
				<input onKeyUp={this.handlerKeyUp.bind(this)} className="form-control" 
					type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}

}

export default TodoHeader // 将TodoHeader导出，否则父组件无法导入