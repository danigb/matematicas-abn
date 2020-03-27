export function randomInteger(min: number, max: number) {
  return () => Math.floor(Math.random() * (max - min)) + min;
}

export const randomDigit = randomInteger(1, 9);
export const randomDigitTen = randomInteger(1, 10);
export const randomDigitZero = randomInteger(0, 9);
export const randomDigitZeroTen = randomInteger(0, 10);

export const randomDecena = () => randomDigit() * 10;

export const randomCentena = () => randomDigit() * 100;

export function sum(a: number, b: number) {
  return a + b;
}

export function shuffle(arr: any[], rnd = Math.random): any[] {
  let i: number;
  let t: any;
  let m: number = arr.length;
  while (m) {
    i = Math.floor(rnd() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}
