
import { createStore, Provider, atom, useAtom } from 'jotai'



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



  return (
    <div>
      Demo4
      <Provider store={store}>
        <Child />
      </Provider>
    </div>
  )
}


export default Index