const calculateDogAge = function(puppyAge) {
  let dogYears = puppyAge * 7;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
};

const calculateHumanAge = function(humanAge) {
  let humanYears = Math.round(humanAge / 7);
  console.log("You are " + humanYears + " years old in dog years!");
};

calculateDogAge(10);
calculateDogAge(7);
calculateDogAge(2);

calculateHumanAge(25);
calculateHumanAge(11);
calculateHumanAge(56);

// puppy-age-calculator.js
