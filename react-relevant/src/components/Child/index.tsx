
import { useState } from 'react';

const useCustomHooks = () => {

  const [num, setNum] = useState(0)

  return {
    count: num,
    setCount: setNum
  }
}

const Child = () => {

  const [num, setNum] = useState<number>(0)
  const { count, setCount } = useCustomHooks()

  return (
    <div>
      <button onClick={() => {
        setNum(pre => pre + 1);
      }}>改变子数字</button>

      <button onClick={() => {
        setCount(pre => pre + 1);
      }}>改变hooks数字</button>
      <div>
        child{num}
      </div>
      <div>
        hooks{count}
      </div>
    </div>
  )
}


export default Child