function fixNumber(e) {
  return Math.round(1e12 * e) / 1e12;
}
const getLoanEstimates = (loan, network) => {
  let newLoan = { ...loan };
  if (null != newLoan.amount && null != newLoan.amount) {
    newLoan.swapFee = newLoan.amount / (network ? 400 : 160);
    newLoan.totalFee = fixNumber(newLoan.tokenFee + newLoan.swapFee);
    newLoan.gain = fixNumber(newLoan.amount * (network ? 0.529 : 0.73));
  }
  return newLoan;
};
export default getLoanEstimates;
