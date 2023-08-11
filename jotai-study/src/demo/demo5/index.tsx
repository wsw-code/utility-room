
import { createStore, Provider, atom, useAtom, useSetAtom } from '../../jotai'
import { useState } from 'react'


const store = createStore();

const dataAtom = atom({ num: 0, count: 0 });



store.sub(dataAtom, () => {
  console.log('变更')
})


const fn = () => {
  console.log(store.get(dataAtom))
}


const Child = () => {
  const [data, setData] = useAtom(dataAtom);
  console.log('render')
  return (
    <div>
      Child
      <div>
        <button onClick={() => {
          setData((pre) => ({ ...pre, num: pre.num += 1 }))
        }}>add</button>
        <button onClick={() => { fn() }}>
          获取数据
        </button>
      </div>
      <div>
        {data.num}
      </div>
    </div>
  )
}


const Index = () => {

  const [open, setOpen] = useState(false)
  const set = useSetAtom(dataAtom)
  return (
    <div>
      Demo5
      {/* <Provider store={store}> */}
      <div>
        <button onClick={() => {
          setOpen(pre => !pre)
        }}>setOpen</button>
        <button onClick={() => {
          set(pre => ({ ...pre, num: pre.num += 1 }))
        }}>add</button>
      </div>
      {/* {
        open && <Child />
      } */}
      <Child />

      {/* </Provider> */}
    </div>
  )
}


export default Index