import { useState } from 'react'
import { createStore } from './redux'
import counter from './reducers'
import applyMiddleware from './redux/applyMiddleware'
import './App.css';
const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

// const a = composeEnhancer()


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}


const store = createStore(counter, null, applyMiddleware(logger))


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
