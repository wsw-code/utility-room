
import { createStore, Provider, atom, useAtom, useSetAtom } from '../../jotai'
import { useReducer } from 'react'


// const store = createStore();

const dataAtom = atom({ num: 0, count: 0 });



// store.sub(dataAtom, () => {
//   console.log('变更')
// })


// const fn = () => {
//   console.log(store.get(dataAtom))
// }


const initialState = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const Child = () => {
  const [data, setData] = useAtom(dataAtom);
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Child
      <div>
        <div>
          count-{count}
        </div>

        <button onClick={() => dispatch('increment')}>+1</button>
        <button onClick={() => {
          setData((pre) => ({ ...pre, num: pre.num += 1 }))
        }}>add</button>
        {/* <button onClick={() => { fn() }}>
          获取数据
        </button> */}
      </div>
      <div>
        {data.num}
      </div>
    </div>
  )
}


const Index = () => {

  return (
    <div>
      <Child />
    </div>
  )
}


export default Index