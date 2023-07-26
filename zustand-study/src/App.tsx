import { useState, useSyncExternalStore } from 'react';
import './App.css';

import { create } from './zustand'

const useBearStore = create<{
  bears: number,
  increasePopulation: () => void;
  removeAllBears: () => void;
}>((set,) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

const store = create(() => ({
  a: 1,
  b: 2
}))

const data = { a: 1 }

const listener: any[] = [];

function App() {

  const a = useSyncExternalStore((sub) => {

    listener.push(sub)

    console.log(sub)

    return () => {
      listener.splice(listener.indexOf(listener), 1)
    }
  }, () => data.a)

  const bears = useBearStore((state: any) => state.bears)
  const increasePopulation = useBearStore((state: any) => state.increasePopulation)
  console.log('渲染')
  return (
    <div>
      <div>
        <button onClick={() => {
          // increasePopulation()

          useBearStore.setState({ bears: useBearStore.getState().bears + 1 })

        }} >更改数据</button>
        <button onClick={() => {
          console.log(useBearStore.getState())
        }} >获取数据</button>
      </div>
      <div>
        {bears}
      </div>
    </div>
  )
}

export default App
