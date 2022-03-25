// BitPosition is zero based. (右至左)
// & 1  =>  & 00000001


function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;  
}
