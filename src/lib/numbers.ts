export function rndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const rndDigit = () => rndInteger(1, 9);
export const rndDigitTen = () => rndInteger(1, 10);
export const rndDigitZero = () => rndInteger(0, 9);
export const rndDigitZeroTen = () => rndInteger(0, 10);

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
