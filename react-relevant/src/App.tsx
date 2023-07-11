import { useState } from 'react'
import './App.css';
import Tear from './components/Tear'
import Effect from './components/Effect'
import ClassElement from './components/ClassElement';
import FunctionName from './components/FunctionName'
import ExternalStore from './components/ExternalStore'

const App = () => {


  const fn = () => {
    console.log(1)
    throw Error()
  }


  return (
    <div>
      {/* <Effect /> */}
      {/* <Tear /> */}
      {/* <ClassElement /> */}
      {/* <FunctionName callback={fn} /> */}
      <ExternalStore />
    </div>
  )
}

export default App
