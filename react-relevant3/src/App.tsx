import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById("btn")?.addEventListener("click", function (e) {
      console.log("原生 btn");
    });
    document.getElementById("box")?.addEventListener("click", function (e) {
      console.log("原生 div");
    });
  }, []);

  return (
    <div
      className="App"
      id="box"
      onClick={() => {
        console.log("react div");
      }}
    >
      <button
        onClick={(e) => {
          console.log("react btn");
          e.stopPropagation();
        }}
        id="btn"
      >
        按钮
      </button>
    </div>
  );
}

export default App;
