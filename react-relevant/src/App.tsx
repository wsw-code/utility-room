import React, { useState, Component, ReactNode } from 'react'

import './App.css';



const Child = () => {

  const [num, setNum] = useState<number>(0)

  return (
    <div>
      <button onClick={() => {
        setNum(pre => pre + 1);
      }}>改变子数字</button>
      <div>
        child{num}
      </div>

    </div>
  )
}

class App extends Component {

  state = {
    num: 1,
    key: 0
  }



  render(): ReactNode {
    console.log(this.state.key)
    return (
      <div>

        <button onClick={() => {
          this.setState({
            num: ++this.state.num
          })
        }}>按钮-num</button>
        <button onClick={() => {
          this.setState({
            key: ++this.state.key
          })
        }}>按钮-key</button>
        <button onClick={() => {
          this.forceUpdate();
        }}>强制更新</button>
        <p>测试{this.state.num}</p>
        <div data-a={this.state.key}>
          <Child />
        </div>

      </div>
    )
  }
}

export default App
