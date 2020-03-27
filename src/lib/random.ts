export function randomInteger(min: number, max: number) {
  return () => Math.floor(Math.random() * (max - min)) + min;
}

export const randomDigit = randomInteger(0, 9);

export function arrayOf(size: number, rand: () => number) {
  return (): number[] => {
    const arr: number[] = [];
    for (let i = 0; i < size; i++) {
      arr.push(rand());
    }
    return arr;
  };
}
