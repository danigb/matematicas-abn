import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const TIME = 1 * 60;

const buttonClass =
  "px-6 mr-6 text-4xl bg-white rounded-full opacity-50 hover:opacity-100";

const rand = () => Math.floor(Math.random() * 10);

const App: React.FC = () => {
  const inputRef = useRef();
  const [time, setTime] = useState(TIME);
  const [solved, setSolved] = useState(false);
  const [num, setNum] = useState(0);
  const [color, setColor] = useState("bg-orange-500");
  const [values, setValues] = useState([0, 0, 0]);

  const validResult = values[0] + values[1] + values[2];
  const problem = `${values[0]} + ${values[1]} + ${values[2]} = `;
  const [value, setValue] = useState("");

  useEffect(() => {
    setValues([rand(), rand(), rand()]);
    setValue("");
  }, [num]);

  useEffect(() => {
    const id = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setTime(0);
        clearInterval(id);
      }
    }, 1000);

    return () => clearInterval(id);
  });

  const handleDone = () => {
    if (+value === validResult) {
      setColor("bg-green-300");
      setSolved(true);
    } else {
      setColor("bg-red-900");
    }
  };

  const Problem = (
    <form
      onSubmit={e => {
        console.log("joder");
        e.preventDefault();
        handleDone();
      }}
    >
      <div className="flex text-6xl">
        {problem}
        <input
          autoFocus
          ref={inputRef.current}
          className="ml-4 border-b px-4 opacity-25 focus:opacity-100 focus:border-0"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div className="mt-6 pt-6">
        <button className={buttonClass} onClick={handleDone}>
          Hecho
        </button>
        <button className={buttonClass} onClick={() => setValue("")}>
          Borrar
        </button>
      </div>
    </form>
  );

  const Solution = (
    <form>
      <div className="text-6xl m-6">{`${problem}${validResult}`}</div>
      <button
        autoFocus
        className={buttonClass}
        onClick={() => {
          setSolved(false);
          setColor("bg-orange-500");
          setNum(num + 1);
        }}
      >
        Siguiente
      </button>
    </form>
  );

  const Summary = (
    <div>
      <h1 className="text-6xl">Has hecho {num} puntos</h1>
      <button
        className={buttonClass}
        onClick={() => {
          setNum(1);
          setSolved(false);
          setValue("");
          setTime(TIME);
        }}
      >
        Empezar
      </button>
    </div>
  );

  return (
    <div className={`${color} text-2xl max-w-6xl h-screen m-auto p-6`}>
      <h1 className="mb-10">Cálculo mental: Sumas</h1>

      {!solved ? Problem : time ? Solution : Summary}
      <div className="mt-6 pt-6 border-t">
        <p>Puntos: {num}</p>
        <p>
          Tiempo: {Math.floor(time / 60)}:{time - 60 * Math.floor(time / 60)}
        </p>
      </div>
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
