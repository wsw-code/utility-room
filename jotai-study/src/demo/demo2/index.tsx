import React from 'react';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'


const strtom = atom('str')

const setLenAtom = atom((get) => get(strtom).length)



const Index = () => {

  const len = useAtomValue(setLenAtom);
  const set = useSetAtom(strtom)

  console.log('渲染')

  return (
    <div>
      <div>
        <button onClick={() => {
          set("str2")
        }} >改变len</button>
      </div>
      Index-{len}
    </div>
  )
}




export default Index