import { useState, useEffect } from "react";

const TIME = 1 * 60;

export default function(max = 10) {
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const startTimer = () => setStartedAt(Date.now());
  const running = startedAt !== 0;
  const seconds = Math.max(0, max - elapsed);

  useEffect(() => {
    const id = setInterval(() => {
      if (startedAt) {
        const now = Date.now();
        setElapsed(Math.floor((now - startedAt) / 1000 + 0.5));
      }
    }, 1000);

    return () => clearInterval(id);
  }, [startedAt]);

  return { startTimer, seconds, running };
}
