import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import { Provider } from 'react-redux';
import ToDos from './component/ToDos';
import ToDoList from './component/ToDoList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './component/Nav';

/**
 * Redux store
 * Store is our global state. This is where all of
 * our global data exists. We pass in the reducer
 * so it will know how to handle any actions (requests)
 */
const store = createStore(
  toDosReducer,
  // If we want to use the Redux DevTools, add this arguement as well!
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// WE can run instructions every time the state/store is 
// updated by using the store's "subscribe" method.
// It takes a function to execute as its arguement, we are
// using it to console.log() our current state each time
// that it experiences a change.

store.subscribe(() => { console.log(store.getState()) });

/**
 * Redux Dispatch
 * This is what we use to send actions to our store's reducer
 */
// Dispatch expects a peroperly formatted action...
// (otherwiser your reducer won't know what to do!))

store.dispatch(addNewToDo("Research Redux"));
store.dispatch(addNewToDo("Review React"));

// When using React-Redux, we use the <Provider> component with
// a "store" prop to pass our global state info down to
// wherever we need it (which component needs it.)
ReactDOM.render(
  <Provider store={ store }>
    <h1>React-Redux To-Do List (TECHCareers)</h1>
    <Router>
      <Nav />
      <Route path="/" component={ToDoList} exact />
      <Route path="/form" component={ToDos} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

