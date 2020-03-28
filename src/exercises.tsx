import React from "react";
import { rndDigitZero, rndTens, rndInteger } from "./lib/numbers";
import Exercise from "./components/Exercise";
import FriendNumbers from "./components/exercises/FriendNumbers";

const TIME_NORMAL = 3 * 60;

const friend10 = (n: number) => 10 - n;
export const AmigosDel10: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndDigitZero} solution={friend10} {...status} />
    )}
  />
);

const friend100 = (n: number) => 100 - n;
export const AmigosDel100Decenas: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndTens} solution={friend100} {...status} />
    )}
  />
);

const rndInt0To100 = rndInteger(0, 100);
export const AmigosDel100: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndInt0To100} solution={friend100} {...status} />
    )}
  />
);
