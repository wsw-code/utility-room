


import { atom, useAtom } from 'jotai';

import DemandAtom from './components/DemandAtom';
import UseSetAtom from './components/UseSetAtom'



const Index = () => {




  // console.log('渲染')

  return (
    <div>




      {/* <DemandAtom /> */}
      <UseSetAtom />
    </div>
  )
}


// export default Index






// 原始Atom
const countAtom = atom(0)
// 派生Atom
const doubleCountAtom = atom((get) => get(countAtom) * 2)
// 仅有更新函数的Atom
const increaseTenAtom = atom(null, (get, set, _arg) => set(countAtom, get(countAtom) + 10))

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  return (
    <h1>
      {count}
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </h1>
  )
}
const DoubleText = () => {
  console.log(1121)
  const [doubleCount] = useAtom(doubleCountAtom)
  const [, increase] = useAtom(increaseTenAtom)
  return (
    <h1>
      {doubleCount}
      <button onClick={increase}>+10</button>
    </h1>
  )
}

const App = () => {
  console.log('12')
  return (
    <>
      <DoubleText />
      <Counter />
    </>
  )
}


export default App