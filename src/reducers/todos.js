import { v4 as uuidv4 } from 'uuid';
/** 
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

// Typically we'll see two paramters:
// 1. State (default value)
// 2. action (the request being sent)
const toDosReducer = (state = [], action) => {
  // Which action is this? What should we do?
  switch (action.type) {
    // If this is the ADD NEW Action
    case ('ADD_NEW_TO_DO'):
      {
        // Prepare a new task object
        const newTask = {
          id: uuidv4(),
          task: action.payload
        }
        // Create a COPY of the original state array
        const newToDoList = [...state];
        newToDoList.push(newTask);
        // Return the updated state (overwrites the state.)
        // The return will overwrite the previous state passed into the reducer!
        return newToDoList;
      }
    case ('REMOVE_TO_DO'):
      {
        const updateToDoList = state.filter(
          // The array will be composed only ofitems that do not have the ID we passed.
          toDo => toDo.id !== action.payload 
        );
        // Return / overwrite the state with this new array of To-Dos
        return updateToDoList;
      }
    // By default, make no change. (if the action type doesn't match)
    default:
      {
        return state;
      }

  };
};

export default toDosReducer;