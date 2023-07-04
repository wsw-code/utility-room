import { useEffect, useState, startTransition } from "react";

let externalState = { counter: 0 };
let listeners: any[] = [];

function dispatch(action: { type: string }) {
  if (action.type === "increment") {
    externalState = { counter: externalState.counter + 1 };
  } else {
    throw Error("Unknown action");
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners = [...listeners, fn];
  return () => {
    listeners = listeners.filter((f) => f !== fn);
  };
}

function useExternalData() {
  const [state, setState] = useState(externalState);
  useEffect(() => {
    const handleChange = () => setState(externalState);
    const unsubscribe = subscribe(handleChange);
    return unsubscribe;
  }, []);
  return state;
}

// const time1 = performance.now()

setInterval(() => {
  // const time2 = performance.now();

  // console.log(time2 - time1);

  // time1 = time2

  dispatch({ type: "increment" });
}, 50);

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          startTransition(() => {
            setShow(!show);
          });
        }}
      >
        toggle content
      </button>
      {show && (
        <>
          <SlowComponent index={0} />
          <SlowComponent index={1} />
          <SlowComponent index={2} />
          <SlowComponent index={3} />
          <SlowComponent index={4} />
        </>
      )}
    </div>
  );
}

function SlowComponent({ index }: { index: number }) {
  const now = performance.now();
  while (performance.now() - now < 200) {
    // do nothing
    // console.log(index)
  }
  const state = useExternalData();
  return <h3>Counter: {state.counter}</h3>;
}
