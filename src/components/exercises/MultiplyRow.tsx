import React, { useState, useEffect } from "react";
import { ExerciceContainer } from "../Exercise";
import { Header2, Actions, Button } from "../Theme";
import { Link } from "gatsby";
import InputNum, { InputState } from "./InputNum";

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EMPTY = NUMS.map((n) => "");

const getState = (value: string, expected: string): InputState =>
  !value ? "empty" : value === expected ? "valid" : "invalid";

const MultiplyRow: React.FC = () => {
  const [path, setPath] = useState("");
  const [num, setNum] = useState(0);
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
  const exit = () => {
    setNum(0);
    setStarted(false);
  };

  const expected = NUMS.map((n) => `${num * n}`);
  const isValid = expected.join(",") === values.join(",");

  useEffect(() => {
    setPath(window.location.pathname);
    setNum(+window.location.pathname || 0);
  }, []);

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
                    <InputNum
                      className={`w-16`}
                      pos={i}
                      onChange={(value) => setValue(value, i)}
                      value={values[i]}
                      state={getState(values[i], expected[i])}
                    />
                  </div>
                ))}
              </form>
              <Actions>
                <Button disabled={!isValid} onClick={restart}>
                  Repetir
                </Button>
                <Link onClick={exit} to={`${path}`}>
                  Salir
                </Link>
              </Actions>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                {NUMS.map((n) => (
                  <div>
                    {n} x {num} = {n * num}
                  </div>
                ))}
              </div>
              <Actions>
                <Button onClick={() => setStarted(true)}>Empezar</Button>
                <Link onClick={exit} to={path}>
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
            {NUMS.map((n) => (
              <Link
                key={n}
                onClick={() => setNum(n)}
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
