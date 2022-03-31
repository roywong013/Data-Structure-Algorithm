const isPositive = (number) => {
  // Zero is neither positive nor negative.
  if (number === 0){
    return false;
  }
  //The most significant 32nd bit can be used to determine whether the number is positive.
  return (number >> 31 & 1) === 0;
}
