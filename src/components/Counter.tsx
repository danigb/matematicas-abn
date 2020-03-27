import React, { useState, useCallback } from "react";
import useCountdown from "../hooks/useCountdown";
import { Property } from "./Theme";

const pad = (num: number, digits: number) => `${num}`.padStart(digits, "0");

type Props = {
  points: number;
  seconds: number;
};

const Counter: React.FC<Props> = ({ points, seconds }) => {
  const minutes = Math.floor(seconds / 60);
  return (
    <div className="flex text-xs opacity-75 mb-4">
      <Property className="mr-4" label="Puntos: ">
        {points}
      </Property>
      <Property label="Tiempo: ">
        {pad(minutes, 1)}:{pad(seconds, 2)}
      </Property>
    </div>
  );
};

export default Counter;

export function useCounter() {
  const [points, setPoints] = useState(0);
  const { seconds, startTimer } = useCountdown();

  const addPoint = useCallback(() => {
    setPoints(points + 1);
  }, [points, setPoints]);

  return { points, seconds, startTimer, addPoint };
}
