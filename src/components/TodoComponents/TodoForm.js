import React from 'react';

const TodoForm = props => {
    return (
        <form className="todo-form">
	        <input className="user-input" type="text" value={props.task} name="task" onChange={props.handleChanges} />
	        <button className="add-btn" onClick={props.addTodo}>Add a New Todo Item</button>
	        <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed Todos</button>
        </form>
    );
};

export default TodoForm;