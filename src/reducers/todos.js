/** 
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

 // Typically we'll see two paramters:
 // 1. State (default value)
 // 2. action (the request being sent)
 const toDosReducer = (state = [], action ) => {
   // Which action is this? What should we do?
  switch ( action.type ) {
    // If this is the ADD NEW Action
    case ('ADD_NEW_TO_DO'):
    {
      // Prepare a new task object
      const newTask = {
        task: action.payload
      }
      // Create a COPY of the original state array
      const newToDoList = [...state];
      newToDoList.push(newTask);
      return newToDoList;
    }
    // By default, make no change.
    default:
    {
      return state;
    }
    
  };
 };

 export default toDosReducer;