import React, { useState, useCallback } from "react";
import useCountdown from "../hooks/useCountdown";

const pad = (num: number, digits: number) => `${num}`.padStart(digits, "0");

type Props = {
  points: number;
  seconds: number;
};

const Counter: React.FC<Props> = ({ points, seconds }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  return (
    <div className="flex opacity-75 mb-4">
      <div className="flex mr-2">
        <label className="mr-1">Puntos:</label>
        {points}
      </div>
      <div className="flex">
        <label className="mr-1">Tiempo:</label>
        {pad(minutes, 1)}:{pad(remainingSeconds, 2)}
      </div>
    </div>
  );
};

export default Counter;

export function useCounter(time: number) {
  const [points, setPoints] = useState(0);
  const { seconds, startTimer } = useCountdown(time);

  const addPoint = useCallback(() => {
    setPoints(points + 1);
  }, [points, setPoints]);

  return { points, seconds, startTimer, addPoint };
}
