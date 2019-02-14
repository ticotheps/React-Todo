import React from 'react';

const TodoForm = props => {
    return (
        <form className="todo-form">
	        <input type="text" value={props.task} name="task" onChange={props.handleChanges} />
	        <button onClick={props.addTodo}>Add a New Todo Item</button>
	        <button onClick={props.clearCompleted}>Clear Completed Todos</button>
        </form>
    );
};

export default TodoForm;