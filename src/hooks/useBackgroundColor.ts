type BgState = "NORMAL" | "SOLVED";

const COLORS: Record<BgState, string> = {
  NORMAL: "bg-orange",
  SOLVED: "bg-green"
};

function setBackground(state: BgState) {
  const color = COLORS[state];

  document.body.className = color;
}

export default function useBackgroundColor() {
  return { setBackground };
}
