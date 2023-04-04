function generateRandomNumbers(
  length: number,
  from: number,
  to: number
): number[] {
  const numbers: number[] = [];
  while (numbers.length < length) {
    const randomNumber = Math.floor(Math.random() * (to - from + 1) + from);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

export default generateRandomNumbers;
