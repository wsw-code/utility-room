import { useState } from 'react'
import './App.css';
import Tear from './components/Tear'
import Effect from './components/Effect'
import ClassElement from './components/ClassElement';
import FunctionName from './components/FunctionName'
// import ExternalStore from './components/ExternalStore'
import Zustand from './components/Zustand';
import Jotai from './components/Jotai'
import JotaiStudy from './components/JotaiStudy'




import { DevTools } from 'jotai-devtools'






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
      {/* <ExternalStore /> */}
      {/* <Zustand /> */}
      {/* <Jotai /> */}
      <DevTools />
      <JotaiStudy />
    </div>
  )
}

export default App
