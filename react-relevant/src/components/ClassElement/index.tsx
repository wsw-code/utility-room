

import React from 'react';

export default class Index extends React.Component {


  state = {
    data: {
      num: 0
    }
  }


  changeDate = () => {
    // this.setState({
    //   data: this.state.data
    // })
    this.setState(this.state)
  }


  render() {
    console.log('渲染')
    console.log(this.state.data)
    return (
      <div>
        <button onClick={this.changeDate}>更改数据</button>
        <div>{this.state.data.num}</div>
      </div>
    )
  }
}