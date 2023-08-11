import { atom, useAtom, createStore, Provider } from "jotai";

const dataAtom = atom({ num: 0, count: 0 })
const store = createStore();

const getData = () => {


  store.set(dataAtom, (pre) => ({ ...pre, num: pre.num += 1 }))

}

store.sub(dataAtom, () => {
  console.log('更新')
})


const Index = () => {

  const [data, setData] = useAtom(dataAtom);


  return (
    <div>
      <div>
        <button onClick={() => {
          setData((pre) => ({ ...pre, num: pre.num += 1 }))
        }} >add</button>
        <button onClick={getData} >获取数据</button>
      </div>
      <div>
        Demo3-{data.num}
      </div>
      <div>
        Demo3-{data.count}
      </div>
    </div>
  )
}


export default Index;