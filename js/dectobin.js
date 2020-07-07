import sayHello, {
    sayHelloAgain
} from "./modules.js";

let decimal = 127;

function decimalToBinaryOf(decimal) {
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

console.log(decimalToBinaryOf(decimal));
console.log(sayHello("john"));
console.log(sayHelloAgain("john"));