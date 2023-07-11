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

const getData = (store: any) => {
  return {
    a: store.a,
    b: store.b
  }
}

const isEqual = (a, b) => {
  return a === b;
}

let hasMemo = false;
let memoizedSnapshot: any;
let memoizedSelection: any;

const memoizedSelector = function (nextSnapshot = store) {
  console.log(1)
  if (!hasMemo) {
    // The first time the hook is called, there is no memoized result.
    hasMemo = true;
    memoizedSnapshot = nextSnapshot;
    const _nextSelection = getData(nextSnapshot);
    memoizedSelection = _nextSelection;
    return _nextSelection;
  }

  const prevSnapshot = memoizedSnapshot;
  const prevSelection = memoizedSelection;

  if (Object.is(prevSnapshot, nextSnapshot)) {
    return prevSelection;
  }
  const nextSelection = getData(store);

  if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
    return prevSelection;
  }

  memoizedSnapshot = nextSnapshot;
  memoizedSelection = nextSelection;
  return nextSelection;
};



const Index = () => {

  const { a, b } = useSyncExternalStore(subscribe, memoizedSelector)
  console.log('渲染')
  return (
    <div>
      <div><button onClick={() => {
        render()
      }} >按钮</button></div>
      <div>{a}</div>
      <div>{b}</div>
    </div>
  )

}


export default Index