const calculateSupply = function(age, amountPerDay) {
  let maxAge = 100;
  let totalNeeded = amountPerDay * 365 * maxAge - age;
  console.log(
    "You will need " +
      totalNeeded +
      " to last you until the ripe old age of " +
      maxAge
  );
};

calculateSupply(18, 2);
calculateSupply(38, 12);
calculateSupply(84, 1);

// lifetime-supply-calculator.js
