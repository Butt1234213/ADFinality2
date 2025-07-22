import * as ADBNotations from "@antimatter-dimensions/notations";

const scientific = new ADBNotations.ScientificNotation();

// Outputs "F2E5"
console.log(scientific.format("1ee100000", 2));