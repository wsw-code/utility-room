



import { useState } from 'react';
import { create, StoreApi, UseBoundStore } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;

  store.use = {}
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}



type Props = {
  bears: number, increasePopulation: (val: number) => void, removeAllBears: () => void
}


const useBearStoreBase = create<Props>()(
  devtools(persist((set) => ({
    bears: 0,
    bears2: 111,
    increasePopulation: (num: number) => set(() => ({ bears: num }), false, { type: 'aaa' }),
    removeAllBears: () => set({ bears: 0 }),
  }), { name: 'food-storage', storage: createJSONStorage(() => sessionStorage), }))
);








const Index = () => {

  // const bears = useBearStore((state) => {
  //   // console.log(state);
  //   return state.bears
  // });
  const [num, setNum] = useState(0);

  const useBearStore = createSelectors(useBearStoreBase)

  // const a = useBearStore();
  const bears = useBearStore.use.bears()
  const increasePopulation = useBearStore.use.increasePopulation()

  console.log('渲染6')
  return (
    <div>
      Zustand
      <div>
        <button onClick={() => {
          increasePopulation(Math.random())
        }} >按钮</button>
        <button onClick={() => {
          setNum(Math.random())
        }} >按钮-num</button>
      </div>
      <div>
        1-{bears}
      </div>
      <div>num-{num}</div>
    </div>
  )
}



export default Index