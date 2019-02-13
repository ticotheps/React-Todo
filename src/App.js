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
	},
	{
		task: 'Teach Lucy how to dribble',
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

	addTodo = e => {
		console.log("The Add Todo button was clicked!");
	};

	clearAll = e => {
		console.log("The Clear All button was clicked!");
	};

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
					<button onClick={this.addTodo}>Add Todo</button>
					<button onClick={this.clearAll}>Clear All</button>
				</form>
      		</div>
    	);
  	}
}

export default App;
