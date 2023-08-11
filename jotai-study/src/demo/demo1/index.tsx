import { atom, useAtom, useSetAtom, useAtomValue } from "jotai";
import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react';

type Point = [number, number];

const dotsAtom = atom<Point[]>([]);
const numberOfDotsAtom = atom(
  (get) => get(dotsAtom).length
);




const numsAtom = atom<{ num: number; count: number }>({ num: 0, count: 0 });


const countOfNumsAtom = atom((get) => get(numsAtom).count)

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {dots.map(([x, y], key) => (
        <circle key={key} cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const setDots = useSetAtom(dotsAtom);
  const setNum = useSetAtom(numsAtom);



  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseMove={(e) => {
        const p: Point = [e.clientX, e.clientY];
        setDots((prev) => [...prev, p]);
        setNum((prev) => ({ ...prev, num: prev.num++ }))
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <SvgDots />
    </svg>
  );
};

const Stats = () => {
  const [numberOfDots] = useAtom(numberOfDotsAtom);

  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

const NumsStats = () => {
  const count = useAtomValue(countOfNumsAtom);

  console.log('渲染-NumsStats')
  return (
    <ul>
      <li>Count: {count}</li>
    </ul>
  );
};

const ControlCount = () => {

  const set = useSetAtom(numsAtom)

  return (
    <div>
      <button onClick={() => {
        set((prev) => ({ ...prev, count: prev.count + 1 }))
      }}>add-count</button>
    </div>
  )
}

const WatchNode = () => {
  const readCount = useAtomCallback(
    useCallback((get) => {
      const currCount = get(numsAtom)
      console.log(currCount)
      return currCount.count
    }, [])
  )

  console.log('渲染-watch', readCount)

  return (
    <div>
      Watch
    </div>
  )
}



const App = () => (
  <>
    <SvgRoot />
    <Stats />
    <NumsStats />
    <ControlCount />
    <WatchNode />
  </>
);

export default App;