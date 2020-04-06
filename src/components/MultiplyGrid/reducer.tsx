import { rndInteger } from "../../lib/numbers";
import { InputState } from "../exercises/InputNum";

const buildRow = (decomposed = "", multiplied = "", added = ""): Value[] => [
  { value: decomposed, state: "empty" },
  { value: multiplied, state: "empty" },
  { value: added, state: "empty" },
];

type Value = {
  value: string;
  state: InputState;
};

type State = {
  question: {
    num: number;
    mult: number;
    result: number;
    str: string;
  };
  answer: {
    valid: boolean;
    rows: Value[][];
  };
};

type RestartAction = {
  type: "restart";
  minNum: number;
  maxNum: number;
  minMult: number;
  maxMult: number;
};
export const Restart = (
  minNum = 40,
  maxNum = 90,
  minMult = 2,
  maxMult = 5
): RestartAction => ({
  type: "restart",
  minNum,
  maxNum,
  minMult,
  maxMult,
});

type SetValueAction = {
  type: "set-value";
  rowNum: number;
  colNum: number;
  value: string;
};
export const SetValue = (
  rowNum: number,
  colNum: number,
  value: string
): SetValueAction => ({
  type: "set-value",
  rowNum,
  colNum,
  value,
});
type Action = RestartAction | SetValueAction;

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "restart":
      return initialState(action);
    case "set-value":
      return setValue(state, action);

    default:
      return state;
  }
}

function setValue(state: State, action: SetValueAction): State {
  const rows: Value[][] = state.answer.rows.map(
    (row: Value[], rowNum): Value[] =>
      row.map(
        (value: Value, colNum: number): Value =>
          action.rowNum === rowNum && action.colNum === colNum
            ? { value: action.value, state: "empty" }
            : value
      )
  );

  if (rows[rows.length - 1][0].value !== "") {
    rows.push(buildRow());
  }

  const answer = { ...state.answer, rows };
  return validate({ ...state, answer });
}

function validate(state: State) {
  const { mult, num: preMult, result } = state.question;
  const { rows } = state.answer;

  const sumNums = rows.reduce((sum, row) => {
    sum += +row[0].value;
    return sum;
  }, 0);

  rows.forEach((row, rowNum) => {
    const [num, multiplied, added] = row;
    const expected = +num.value * mult;

    if (num.value === "") {
      num.state = "empty";
    } else if (sumNums <= preMult) {
      num.state = "valid";
    } else {
      num.state = "invalid";
    }

    if (multiplied.value === "") {
      multiplied.state = "empty";
    } else if (+multiplied.value === expected) {
      multiplied.state = "valid";
    } else {
      multiplied.state = "invalid";
    }

    const prevAdded = rowNum === 0 ? 0 : +(rows[rowNum - 1][2].value || "0");
    if (added.value === "") {
      added.state = "empty";
    } else if (+added.value === prevAdded + expected) {
      added.state = "valid";
    } else {
      added.state = "invalid";
    }
  });

  const lastRowFilled = rows
    .slice()
    .reverse()
    .find((row) => row[0].value !== "");
  state.answer.valid = +lastRowFilled[2].value === result;

  return state;
}

export function initialState(action: RestartAction = Restart()): State {
  const num = rndInteger(action.minNum, action.maxNum);
  const mult = rndInteger(action.minMult, action.maxMult);
  const result = num * mult;

  return {
    question: { num, mult, result, str: `${num} x ${mult} = ` },
    answer: { valid: false, rows: [buildRow(), buildRow()] },
  };
}
