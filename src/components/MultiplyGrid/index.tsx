import React, { useReducer, useEffect } from "react";
import InputNum from "../exercises/InputNum";
import Exercise, { ExerciseProps } from "../Exercise";
import { reducer, initialState, SetValue, Restart } from "./reducer";

const MultiplyGridFacade: React.FC = () => {
  return (
    <Exercise time={3 * 60} render={(props) => <MultiplyGrid {...props} />} />
  );
};

export default MultiplyGridFacade;

type MultiplyGridProps = ExerciseProps & {
  minNum?: number;
  maxNum?: number;
  minMult?: number;
  maxMult?: number;
};

const MultiplyGrid: React.FC<MultiplyGridProps> = ({
  step,
  setSolved,
  minNum = 30,
  maxNum = 99,
  minMult = 2,
  maxMult = 5,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  useEffect(() => {
    dispatch(Restart(minNum, maxNum, minMult, maxMult));
  }, [step, dispatch]);

  useEffect(() => {
    setSolved(state.answer.valid);
  }, [setSolved, state.answer.valid]);

  return (
    <>
      <h2 className="text-right">
        {state.question.str}
        {state.answer.valid ? state.question.result : ""}
      </h2>
      {state.answer.rows.map((row, rowNum) => (
        <div key={rowNum} className="flex w-full">
          {row.map((value, colNum) => (
            <InputNum
              key={rowNum * 3 + colNum}
              className="w-1/3"
              pos={rowNum * 3 + colNum + 1}
              value={value.value}
              state={value.state}
              onChange={(value) => dispatch(SetValue(rowNum, colNum, value))}
            />
          ))}
        </div>
      ))}
    </>
  );
};
