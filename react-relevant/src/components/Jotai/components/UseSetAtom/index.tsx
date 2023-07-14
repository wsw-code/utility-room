
import { useSetAtom, useAtomValue, atom, useAtom } from 'jotai';
import { memo, useState } from 'react'

const switchAtom = atom(false)

const SetTrueButton = memo(() => {
  const setCount = useSetAtom(switchAtom);
  const setTrue = () => setCount(true);
  // const state = useAtomValue(switchAtom)

  console.log('render')
  return (
    <div>
      <button onClick={() => {
        setTrue()

      }}>Set True</button>
    </div>
  )
})

const SetFalseButton = () => {
  const setCount = useSetAtom(switchAtom)
  const setFalse = () => setCount(false)

  return (
    <div>
      <button onClick={setFalse}>Set False</button>
    </div>
  )
}

function App() {
  const state = useAtomValue(switchAtom);



  return (
    <div>
      State: <b>{state.toString()}</b>

      <SetTrueButton />
      <SetFalseButton />
    </div>
  )
}


export default App