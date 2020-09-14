import React, {useState} from 'react';
import { connect } from 'react-redux';

function ToDos( props )
{
  // Local state to keep track of this component
  // form field

  // Add a submit function
  const submitToDo = event => {
    event.preventDefault(); // Prevent the page from reloading!

  }

  const [newTask, setNewTask] = useState('');
  return (
    <>
      <h2>To-Do List</h2>
      <form onSubmit={submitToDo}>
        <label htmlFor="task">Enter New Task:</label>
        <input 
          id="task"
          type="text"
          value={newTask}
          onChange={event => {setNewTask(event.target.value) } }/>
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