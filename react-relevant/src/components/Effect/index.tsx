import { useEffect, useLayoutEffect, useState } from 'react';




const Index = () => {

  const [num, setNum] = useState(0);


  useEffect(() => {
    console.log('渲染-useEffect')
  });


  useLayoutEffect(() => {
    console.log('渲染-useLayoutEffect')
  })


  return (
    <div>
      <button onClick={() => {
        setNum(pre => pre + 1)
      }}>num-control</button>
      <div>
        {num}
      </div>
    </div>
  )
}


export default Index;