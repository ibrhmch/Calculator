import React, { useState } from "react";
import "../sass/main.scss";

const math = window.math;

const App = () => {
  const [exp, setExp] = useState("");
  const [ans, setAns] = useState(null);
  return (
    <div className="container">
      <input value={exp} type="text" />
      <button
        onClick={() => {
          setExp("");
          setAns(null);
        }}
        className="button--opt"
      >
        AC
      </button>
      <button onClick={() => setExp(`${exp}${ans}`)} className="button--opt">
        {ans}
      </button>
      <button onClick={() => setExp(`${exp}1`)} className="button">
        1
      </button>
      <button onClick={() => setExp(`${exp}2`)} className="button">
        2
      </button>
      <button onClick={() => setExp(`${exp}3`)} className="button">
        3
      </button>
      <button onClick={() => setExp(`${exp}*`)} className="button">
        *
      </button>
      <button onClick={() => setExp(`${exp}4`)} className="button">
        4
      </button>
      <button onClick={() => setExp(`${exp}5`)} className="button">
        5
      </button>
      <button onClick={() => setExp(`${exp}6`)} className="button">
        6
      </button>
      <button onClick={() => setExp(`${exp}-`)} className="button">
        -
      </button>
      <button onClick={() => setExp(`${exp}7`)} className="button">
        7
      </button>
      <button onClick={() => setExp(`${exp}8`)} className="button">
        8
      </button>
      <button onClick={() => setExp(`${exp}9`)} className="button">
        9
      </button>
      <button onClick={() => setExp(`${exp}+`)} className="button">
        +
      </button>
      <button onClick={() => setExp(`${exp}/`)} className="button">
        /
      </button>
      <button onClick={() => setExp(`${exp}0`)} className="button">
        0
      </button>
      <button onClick={() => setExp(`${exp}.`)} className="button">
        .
      </button>
      <button
        onClick={() => {
          setAns(math.evaluate(exp));
          setExp("");
        }}
        className="button"
      >
        =
      </button>
    </div>
  );
};

export default App;
