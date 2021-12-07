import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT_REQ, DECREMENT_REQ, ADD_REQ, INCREMENT_ASYNC_REQ } from './redux/actionTypes'
import './App.css';

function App() {
  
  const dispatch = useDispatch()
  const action = (type, payload) => dispatch({ type, payload })
  const counterReducer = useSelector(({counterReducer}) => counterReducer)
 console.log(counterReducer)
  return (
    <>
      <button onClick={()=> action(INCREMENT_ASYNC_REQ)}>Increement after 1 second</button>
      <button onClick={()=> action(INCREMENT_REQ)}> Increement </button>
      <button onClick={()=> action(DECREMENT_REQ)}> Decreement </button>
      <button onClick={()=> action(ADD_REQ, 10)}>Add</button>
      <hr/>
      <div>Click: {counterReducer.count}</div>
    </>
  );
}

export default App;
