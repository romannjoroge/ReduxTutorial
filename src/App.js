/*
  This file shows how to implement useReducer in the component
*/
import { useEffect, useReducer } from 'react';
import './App.css';
import { quoteResolver, INITIAL_STATE, ACTIONS } from './reducer';

function App() {
  const [state, dispatch] = useReducer(quoteResolver, INITIAL_STATE);
  useEffect(getQuote, [])

  function getQuote() {
    // Is loading
    dispatch({type: ACTIONS.LOADING});
    fetch("https://api.kanye.rest/").then(response => {
      if (!response.ok) {
        dispatch({type: ACTIONS.ERROR})
        console.log("Fail")
      } else {
        response.json().then(json => {
          dispatch({type: ACTIONS.SUCCESS, payload: json.quote})
          console.log(json.quote)
        }).catch(err => {
          dispatch({type: ACTIONS.ERROR})
          console.log("Small Error")
        })
      }
    }).catch(err => {
      // dispatch({type: ACTIONS.ERROR})
      console.log("Big Error")
    })
  }

  return (
    <div className="app">
      <p>There is a new Kanye Quote everyday, want to hear one?</p>
      <p className='quote'>{state.quote}</p>
    </div>
  );
}

export default App;
