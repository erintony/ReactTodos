import React from 'react'
import ReactDOM from 'react-dom'
import Item from './item'
 
class Main extends React.Component {
	render () {
		if(this.props.items.length > 0){

			return (
				<section id="main">
			      <input id="toggle-all" onClick={this.props.markAllToggle} type="checkbox" />
			      <label htmlFor="toggle-all">Mark all as complete</label>
			      <ul id="todo-list">
					{						
						this.props.items.map((todo,index) => {
             
             				 return <Item item={todo} index={index} key={index} {...this.props} />
       				    })
					}
			      </ul>
			    </section>
			);
		}else{
			return(
				<b>There are nothing left. </b>
			);
		}
		
	}
}

export default Main