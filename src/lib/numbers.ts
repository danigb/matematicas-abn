export function rndInteger(min: number, max: number) {
  return () => Math.floor(Math.random() * (max - min)) + min;
}

export const rndDigit = rndInteger(1, 9);
export const rndDigitTen = rndInteger(1, 10);
export const rndDigitZero = rndInteger(0, 9);
export const rndDigitZeroTen = rndInteger(0, 10);

export const rndDigits2 = () => [rndDigitZero(), rndDigitZero()];
export const rndDigits3 = () => [
  rndDigitZero(),
  rndDigitZero(),
  rndDigitZero()
];

export const rndTens = () => rndDigit() * 10;
export const rndTens2 = () => [rndTens(), rndTens()];
export const rndTens3 = () => [rndTens(), rndTens(), rndTens()];

export const rndHundreds = () => rndDigit() * 100;
export const rndHundreds2 = () => [rndHundreds(), rndHundreds()];
export const rndHundreds3 = () => [rndHundreds(), rndHundreds(), rndHundreds()];

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
