
import { createStore, Provider, atom, useAtom, useSetAtom } from '../../jotai'



// const store = createStore();

const dataAtom = atom({ num: 0, count: 0 });



const depAtom = atom((get) => { return get(dataAtom).num + get(dataAtom).count })




const Child = () => {

  const [data, setData] = useAtom(dataAtom);
  const [total] = useAtom(depAtom);

  return (
    <div>
      Child
      <div>


        <button onClick={() => {
          setData((pre) => ({ ...pre, num: pre.num += 1 }))
        }}>add-num</button>
        <button onClick={() => {
          setData((pre) => ({ ...pre, count: pre.count += 1 }))
        }}>add-count</button>
      </div>
      <div>
        num-{data.num}
      </div>
      <div>
        count-{data.count}
      </div>
      <div>
        {total}
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