
import { useCallback } from 'react';





const Index = ({ callback }: any) => {
  const fn2 = useCallback({
    [callback.name]() {
      callback()
    }
  }[callback.name], [callback])

  // console.log(fn2.name)
  return (
    <div>
      <button onClick={fn2}>按钮</button>
    </div>
  )
}


export default Index