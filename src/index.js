import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(10);

  
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter +  20)
        }}
      >
        Sumar
      </button>

      <button onClick={() => {
          setCounter(counter -  10)
        }}
      >
        restar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
