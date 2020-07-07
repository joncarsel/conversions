export default function sayHello(name) {
    return ('hello' + name);
}

export function binaryToDecimalOf(bin) {
  var decimal = 0;
  for (let index = bin.length - 1; index >= 0; index--) {
    decimal += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index);
  }
  return decimal;
}

export function decimalToBinaryOf(decimal) {
    let binary = "";
    let powersOfTwo = [];
    let highestPowerOfTwo = 1;

    while (highestPowerOfTwo <= decimal) {
        powersOfTwo.unshift(highestPowerOfTwo);
        highestPowerOfTwo *= 2;
    }
    for (var value of powersOfTwo) {
        if (decimal >= value) {
            binary += "1";
            decimal -= value;
        } else {
            binary += "0";
        }
    }
    return binary;
}

