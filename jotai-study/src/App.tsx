import { useReducer } from 'react'



const reducer = (state: any, action: any) => {

  if (action.type === 'add') {
    return {
      ...state,
      count: state.count + 1
    }
  }
  return state
}

function App() {
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 }, (data) => {
    console.log(data)
    return data
  })

  return (
    <div>
      <div>
        <button onClick={() => {
          dispatch({ type: 'add', })
        }} >更改数据</button>
      </div>
      <div>
        {count}
      </div>
    </div>
  )
}

export default App
