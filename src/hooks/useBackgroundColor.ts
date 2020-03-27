import { createGlobalState } from "react-hooks-global-state";
import { useMemo, useCallback } from "react";

type BgState = "NORMAL" | "SOLVED";

const COLORS: Record<BgState, string> = {
  NORMAL: "bg-orange",
  SOLVED: "bg-green",
};

const initialState = { color: COLORS.NORMAL };
const { useGlobalState } = createGlobalState(initialState);

export default () => {
  const [color, setColor] = useGlobalState("color");
  const setBackground = useCallback(
    (state: BgState) => setColor(COLORS[state]),
    [setColor],
  );

  return { color, setBackground };
};
