import React, { useState, useEffect } from "react";
import { ExerciceContainer } from "../Exercise";
import { Header2, Actions, Button } from "../Theme";
import { Link } from "gatsby";

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EMPTY = NUMS.map(n => "");

function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.keyCode === 13) {
    const form = (event.target as any).form;
    const index = Array.prototype.indexOf.call(form, event.target);
    const next = form.elements[index + 1];
    if (next) next.focus();
    else event.preventDefault();
  }
}

type InputProps = {
  pos: number;
  value: string;
  expected: string;
  onChange: (value: string) => void;
};
type InputState = "empty" | "valid" | "invalid";

const BORDER: Record<InputState, string> = {
  empty: "border-orange-300",
  valid: "border-green-500",
  invalid: "border-purple-500"
};
const BACKGROUND: Record<InputState, string> = {
  empty: "bg-white",
  valid: "bg-green-200",
  invalid: "bg-purple-200"
};

const Input: React.FC<InputProps> = ({ pos, expected, value, onChange }) => {
  const state: InputState = !value
    ? "empty"
    : value === expected
    ? "valid"
    : "invalid";
  return (
    <input
      type="number"
      className={`w-16 px-1 border-t-4 border-b-4 ${BORDER[state]} ${BACKGROUND[state]}`}
      onKeyDown={handleEnter}
      value={value}
      onChange={e => onChange(e.target.value)}
      tabIndex={pos}
      autoFocus={pos === 0}
    />
  );
};

const MultiplyRow: React.FC = () => {
  const [started, setStarted] = useState(true);
  const [values, setValues] = useState(EMPTY);

  const setValue = (value: string, i: number) => {
    const newValues = [...values];
    newValues[i] = value;
    setValues(newValues);
  };
  const restart = () => {
    setValues(EMPTY);
  };

  const path = window.location.pathname;
  const num = +window.location.hash.slice(1) || 0;
  const expected = NUMS.map(n => `${num * n}`);
  const isValid = expected.join(",") === values.join(",");

  useEffect(() => {
    setStarted(false);
    restart();
  }, [num]);

  return (
    <ExerciceContainer isValid={isValid}>
      {num ? (
        <>
          <Header2>La tabla del {num}</Header2>
          {started ? (
            <>
              <form className="flex flex-col">
                {NUMS.map((n, i) => (
                  <div key={n} className="flex mt-2">
                    <div className="mr-2 min-w-6 text-right">
                      {n} x {num} =
                    </div>
                    <Input
                      pos={i}
                      onChange={value => setValue(value, i)}
                      value={values[i]}
                      expected={expected[i]}
                    />
                  </div>
                ))}
              </form>
              <Actions>
                <Button disabled={!isValid} onClick={restart}>
                  Repetir
                </Button>
                <Link to={`${path}`}>Salir</Link>
              </Actions>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                {NUMS.map(n => (
                  <div>
                    {n} x {num} = {n * num}
                  </div>
                ))}
              </div>
              <Actions>
                <Button onClick={() => setStarted(true)}>Empezar</Button>
                <Link onClick={() => setStarted(false)} to={path}>
                  Cambiar
                </Link>
              </Actions>
            </>
          )}
        </>
      ) : (
        <>
          <Header2>¿Qué tabla que quieres practicar?</Header2>
          <div className={`flex flex-col items-start`}>
            {NUMS.map(n => (
              <Link
                key={n}
                className={`bg-white px-6 mb-4 rounded-full`}
                to={`${path}#${n}`}
              >
                Tabla del {n}
              </Link>
            ))}
          </div>
        </>
      )}
    </ExerciceContainer>
  );
};

export default MultiplyRow;
