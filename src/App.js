import React from 'react';
import Todo from './components/TodoComponents/Todo';
// import TodoList from './components/TodoComponents/TodoList';


const todos = [
	{
	  task: 'Beat Michael Jordan in H-O-R-S-E',
	  id: 1528817077286,
	  completed: false
	},
	{
	  task: 'Get buckets',
	  id: 1528817084358,
	  completed: false
	}
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos: todos,
		}
	}

	render() {
    	return (
      		<div className="App">
        		<header className="title-container">
					<h1 className="title">Welcome <br/> to <br/> Git-er-Done!</h1>
				</header>
				{/* <TodoList /> */}  
				<div className="todo-list">
					{this.state.todos.map(todoFromMap => (
						<Todo todo={todoFromMap} />
					))}
				</div>
				<form className="todo-form">
					<input type="text" />
				</form>
				<div>
					<button>Add Todo</button>
					<button>Clear All</button>
				</div>
      		</div>
    	);
  	}
}

export default App;
