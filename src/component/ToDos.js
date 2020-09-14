import React, { useState } from 'react';
import { connect } from 'react-redux';
// up a directory use ..
// same one use .
import { addNewToDo } from '../actions/todos';

function ToDos(props) {
  // Local state to keep track of this component
  // form field
  const [newTask, setNewTask] = useState('');
  
  // Add a submit function
  const submitToDo = event => {
    event.preventDefault(); // Prevent the page from reloading!
    // Form updates so that we use setNewTask
    // The LOCAL state is updated to newTask
    // We then pass that variable / state into addNewToDo which is an action
    // We then pass that action into dispatch which is the reducer.
    // It then updates our store.

    props.dispatch(addNewToDo(newTask));
    // The props know which store to access because of Provider tag in the Index.
    // Because on the Provider and the connect **
  }

  return (
    <>
      <h2>To-Do List</h2>
      <form onSubmit={submitToDo}>
        <label htmlFor="task">Enter New Task:</label>
        <input
          id="task"
          type="text"
          value={newTask}
          onChange={event => { setNewTask(event.target.value) }} />
        <input type="submit" value="Add New To-Do" />
      </form>
      <ul>
      </ul>
    </>
  );
};

// Parenthesis right beside one denotes that the function is being passed a value 
export default connect(
  // We set up a "mapStateToProps" function / relationship.
  // state refers to the global store
  // We arbitrarily decide on the name inside the props -> toDos
  // Basically, what you return, gets tacked-on to your
  // component props.
  // Think: props.toDos for this example.
  state => { return { toDos: state } }
)(ToDos);