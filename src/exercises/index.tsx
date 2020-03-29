import React from "react";
import { rndDigitZero, rndInteger, sum, rndDigit } from "../lib/numbers";
import Exercise from "../components/Exercise";
import FriendNumbers from "../components/exercises/FriendNumbers";
import ArithmeticNumbers from "../components/exercises/ArithmeticNumbers";

const TIME_NORMAL = 1 * 60;

export const rndDigits2 = () => [rndDigitZero(), rndDigitZero()];
export const rndDigits3 = () => [
  rndDigitZero(),
  rndDigitZero(),
  rndDigitZero()
];

export const SumaUnidades2 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers {...Exercise} generate={rndDigits2} operation={sum} />
    )}
  />
);

export const SumaUnidades3 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers {...Exercise} generate={rndDigits3} operation={sum} />
    )}
  />
);

export const rndTens = () => rndDigit() * 10;
export const rndTens2 = () => [rndTens(), rndTens()];
export const rndTens3 = () => [rndTens(), rndTens(), rndTens()];

export const SumaDecenas2 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers {...Exercise} generate={rndTens2} operation={sum} />
    )}
  />
);

export const SumaDecenas3 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers {...Exercise} generate={rndTens3} operation={sum} />
    )}
  />
);

export const rndHundreds = () => rndDigit() * 100;
export const rndHundreds2 = () => [rndHundreds(), rndHundreds()];
export const rndHundreds3 = () => [rndHundreds(), rndHundreds(), rndHundreds()];

export const SumaCentenas2 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers
        {...Exercise}
        generate={rndHundreds2}
        operation={sum}
      />
    )}
  />
);

export const SumaCentenas3 = () => (
  <Exercise
    time={TIME_NORMAL}
    render={Exercise => (
      <ArithmeticNumbers
        {...Exercise}
        generate={rndHundreds3}
        operation={sum}
      />
    )}
  />
);

const friend10 = (n: number) => 10 - n;
const friend100 = (n: number) => 100 - n;
const rndInt0To100 = rndInteger(0, 100);

export const AmigosDel10: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndDigitZero} solution={friend10} {...status} />
    )}
  />
);

export const AmigosDel100Decenas: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndTens} solution={friend100} {...status} />
    )}
  />
);

export const AmigosDel100: React.FC = () => (
  <Exercise
    time={TIME_NORMAL}
    render={status => (
      <FriendNumbers generate={rndInt0To100} solution={friend100} {...status} />
    )}
  />
);
