import { useEffect } from "react";

type BgState = "NORMAL" | "SOLVED";

const COLORS: Record<BgState, string> = {
  NORMAL: "bg-orange",
  SOLVED: "bg-green",
};

function setBackground(state: BgState) {
  const color = COLORS[state];

  document.body.className = color;
}

export default function useBackgroundColor() {
  useEffect(() => {
    setBackground("NORMAL");
  }, []);

  return setBackground;
}
