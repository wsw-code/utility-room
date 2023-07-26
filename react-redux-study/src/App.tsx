import { useSelector, useDispatch } from './react-redux';
import { Button } from 'antd'
import './App.css';




function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count)
  console.log('渲染')
  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            dispatch({ type: 'incremented' })
          }}
        >新增</Button>
        <Button
          onClick={() => {
            dispatch({ type: 'decremented' })
          }}
        >减少</Button>
      </div>
      <div>
        我是一个页面{count}
      </div>
    </div>
  )
}

export default App
