const clearBit = (number, bitPosition){
  let invert = ~(1 << bitPosition);
  return number & invert
}
