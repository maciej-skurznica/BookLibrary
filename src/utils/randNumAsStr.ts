function randNumAsStr(from: number, to: number, toFix: number): string {
  const randNum = Math.random() * (to - from) + from;
  if (toFix === 0) {
    return Math.round(randNum).toString();
  }
  return Number(randNum).toFixed(toFix);
}

export default randNumAsStr;
