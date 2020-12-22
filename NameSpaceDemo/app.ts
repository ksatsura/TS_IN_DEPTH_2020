/// <reference path="utility-functions.ts" />

const result1 = Utility.Fees.calculateLateFee(4);
console.log(result1);
const result2 = Utility.maxBooksAllowed(20);
console.log(result2);

import Util = Utility.Fees;
console.log(Util.calculateLateFee(10));