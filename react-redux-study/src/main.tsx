import { Provider } from './react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { legacy_createStore } from 'redux';
import reducer from './reducer'

import './index.css'


const store = legacy_createStore(reducer);
console.log(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
