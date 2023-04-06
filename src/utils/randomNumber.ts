// Generate a random number between two numbers and return it as a number with a fixed number of decimal places
function randomNumber(from: number, to: number, toFix = 0): number {
  const randNum = Math.random() * (to - from) + from;
  if (toFix === 0) {
    return Math.round(randNum);
  }
  return parseFloat(randNum.toFixed(toFix));
}

export default randomNumber;
