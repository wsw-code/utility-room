import { useState } from 'react'
import './App.css';

const useCustomHooks = () => {

  const [num, setNum] = useState(0)

  return {
    count: num,
    setCount: setNum
  }
}

const App = () => {
  const [num, setNum] = useState<number>(0)
  const { count, setCount } = useCustomHooks()
  return (
    <div>
      <button onClick={() => {
        setNum(pre => pre + 1);
      }}>改变子数字</button>

      <button onClick={() => {
        setCount(pre => pre + 1);
      }}>改变hooks数字11</button>
      <div>
        child{num}
      </div>
      <div>
        hooks---{count}
      </div>
    </div>
  )
}

export default App
