# ReduxTutorial
Code I write while learning about redux

## Introduction
Redux toolkit is a tool used to build redux applications that writes for you alot of the boiler plate needed to write a redux application. Redux is used to have custom state management logic. 

### useReducer
useReducer is similar to useState in that it is used to manage the state of your react application. useReact is prefered to useState when **you have a function that updates multiple states**. Also if you have to replace a state thats an object i.e
```javascript
state = {
    state1 = "",
    state2 = {},
    state3 = [],
    state4 = num
}
```
It can get very complicated to manage this state using setState.

Let's take a scenario where we want to fill a page with data from the internet. As we get the data from the internet we want to display a loading animation. If the data is gotten succesfully we want to stop displaying the loading animation and display the data. If we get an error we display the error but no data. 

If we were to useState we would have to create 3 states
```javascript
let [loading, setLoading] = useState(false)
let [data, setData] = useState([])
let [error, setError] = useState('')

// We would have to change each state individually when handling data fetch
function fetchData() {
    try {
        setLoading(true)
        await data
        setData(data)
        setLoading(false)
    } catch(err) {
        setLoading(false)
        setError(err)
    }
}

// This is prone to errors and makes code less readable
```

We could instead use useReducer which works with the principle of accepting an action of various types and current state and changing the state depending on the action i.e. we could have an error action, loaded succesful function and isloading action
```javascript
export INITIAL_STATE = {
    loading: false,
    data: {},
    error: ""
}

export function postReducer(state, action) {
    switch(action.type) {
        case "error":
            return {
                ...state,
                error: action.error_message,
                loading: false
            }
        case "loading":
            return {
                ...state,
                loading: true,
                error: ""
            }
        case "succesful":
            return {
                loading: false
                data: action.payload
                error: ""
            }
        default:
            return state
    }
}
```
We import the state and the reducer function into where we want to manage the state. The useReducer hooks takes as an arguement the initial state of the app and a reducer function. It returns the new state of the app and a dispatcher function. The dispatcher function takes as an arguement the action object. The state is passed by default with the useReducer hook.
```javascript
import {useReducer} from 'react'
import {INITIAL_STATE, postReducer} from "top-example"

export default Post() {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

    function fetchData() {
        try{
            dispatch({type: "loading"})
            await data
            dispatch({type: "succesful", payload: data})
        } catch(err) {
            dispatch({type: "error", error_message: err})
        }
    }

    return (
        <div>
            <p>state.data</p>
        </div>
    );
}
```