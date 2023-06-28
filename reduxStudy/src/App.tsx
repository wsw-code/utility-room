import { useState } from 'react'
import { createStore } from './redux'
import counter from './reducers'
import applyMiddleware from './redux/applyMiddleware'
import './App.css';
const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

// const a = composeEnhancer()


const logger1 = ({ getState }) => (next) => (action) => {
  console.log('before dispatch1', action)
  const returnValue = next(action)
  console.log('after dispatch1', 'getState()获取store')
  return returnValue
}

const logger2 = ({ getState }) => (next) => (action) => {
  console.log('before dispatch2', action)
  const returnValue = next(action)
  console.log('after dispatch2', 'getState()获取store')
  return returnValue
}


const store = createStore(counter, null, applyMiddleware(logger1, logger2))


store.subscribe(() => {
  console.log(store.getState())
})

function App() {


  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div>
  )
}

export default App
