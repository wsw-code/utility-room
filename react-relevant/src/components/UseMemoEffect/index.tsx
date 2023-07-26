import React, { useMemo, useEffect, useState } from 'react'




const Index = () => {

  const [num, setNum] = useState(0)



  const num2 = useMemo(() => {
    console.log('useMemo')
    return num * 2
  }, [num]);

  const num3 = useMemo(() => {
    console.log('useMemo2')
    return num * 3
  }, [num]);

  useEffect(() => {
    console.log('useEffect')
    console.log(num2, num3)
  }, [num2, num3])



  return (
    <div>
      <div>
        <button onClick={() => {
          setNum(pre => pre + 1)
        }}>更改数据</button>
      </div>

      <div>
        num:{num} <br />
        num2:{num2}

      </div>
      <div>
        <Test num={num} />
      </div>
    </div>
  )
}


export default Index



export class Test extends React.Component<{ num: number }> {

  constructor(props: { num: number }) {
    super(props)

  }

  render() {
    return (
      <div>
        children{this.props.num}
      </div>
    )
  }
}