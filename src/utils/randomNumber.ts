function randomNumber(from: number, to: number, toFix = 0): number {
  const randNum = Math.random() * (to - from) + from;
  if (toFix === 0) {
    return Math.round(randNum);
  }
  return parseFloat(randNum.toFixed(toFix));
}

export default randomNumber;
