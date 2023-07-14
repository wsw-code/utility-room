import { useSyncExternalStore, useMemo } from 'react'
const store = {
  a: 1,
  b: 2,
  c: 3
}
const list: any[] = [];

const subscribe = (update: any) => {
  list.push(update)

  return () => {
    list.splice(list.indexOf(update), 1)
  }
}

const render = () => {
  list.forEach(el => {
    el()
  })
}

const getData = () => {
  console.log('执行')
  return store.a
}

const isEqual = (a: any, b: any) => {
  return a === b;
}



const Index = () => {

  const a = useSyncExternalStore(subscribe, getData)

  console.log('渲染')
  return (
    <div>
      <div><button onClick={() => {
        store.a++
        render()
      }} >按钮</button></div>
      <div>{a}</div>

    </div>
  )

}


export default Index