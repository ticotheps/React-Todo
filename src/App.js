import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
	{
	  	task: 'Beat Michael Jordan in H-O-R-S-E',
	  	id: 1528817077286,
	  	completed: false
	},
	{
	  	task: 'Shovel the snow',
	  	id: 1528817084358,
	  	completed: false
	},
	{
		task: 'Teach Lucy how to dribble',
		id: 1528817084321,
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
			// inputValue: ""
			task: "",
			id: "",
			completed: ""
		}
	}

	addTodo = e => {
		e.preventDefault();
		console.log(this.state.inputValue);

		const newTodo = {
			task: this.state.task,
			id: Date.now(),
			completed: false
		};

		this.setState({
			todos: [...this.state.todos, newTodo],
			task: "",
			id: "",
			completed: ""
		});
	};

	clearAll = e => {
		console.log("The Clear All button was clicked!");
	};

	handleChanges = e => {
		console.log(e.target.value);

		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
    	return (
      		<div className="App">
        		<header className="title-container">
					<h1 className="title">Welcome <br/> to the <br/> Git-er-Done <br/> To Do List!</h1>
				</header> 
				{/* <div className="todo-list">
					{this.state.todos.map(todoFromMap => (
						<Todo key={todoFromMap.id} todo={todoFromMap} />
					))}
				</div> */}
				<TodoList todos={this.state.todos} />
				<TodoForm 
					addTodo={this.addTodo}
					clearAll={this.clearAll}
					task={this.state.task}
					id={this.state.id}
					completed={this.state.completed}
					handleChanges={this.handleChanges}
				/>
      		</div>
    	);
  	}
}

export default App;
