import { useState, memo } from 'react'
import './App.css';





// const App = () => {
//   const [num, setNum] = useState<number>(0)

//   return (
//     <div>
//       <button onClick={() => {
//         setNum(pre => pre + 1);
//       }}>改变子数字11122wsssw</button>
//       <div>
//         child{num}
//       </div>

//     </div>
//   )
// }





export default memo(() => {
  const [num, setNum] = useState<number>(0)

  return (
    <div>
      <button onClick={() => {
        setNum(pre => pre + 1);
      }}>改变子数字1wsw</button>
      <div>
        child{num}
      </div>

    </div>
  )
})




