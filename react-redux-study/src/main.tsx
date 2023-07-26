import { useState } from 'react'
import { Provider } from './react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { legacy_createStore } from 'redux';
import reducer from './reducer'

import './index.css'


const store = legacy_createStore(reducer);


const store2 = legacy_createStore(reducer);


const Home = () => {

  const [data, setData] = useState(store)


  return (
    <div>
      <div>
        <button onClick={() => {
          setData(store2)
        }}>更换数据</button>
      </div>

      <Provider store={data}>
        <App />
      </Provider>
    </div>

  )
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Home />
)
