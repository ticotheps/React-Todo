import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div class="App">
        <header class="title-container">
			<h1 class="title">Welcome <br/> to <br/> Git-er-Done!</h1>
			<TodoList />
			<TodoForm />
        </header>  
      </div>
    );
  }
}

export default App;
