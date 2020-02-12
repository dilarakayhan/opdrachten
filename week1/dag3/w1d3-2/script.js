/* Make a sandwich
    Get one slice of bread.
    Add cheese.
    Put a slice of bread on top.

    */

// Deel A
const makeCheeseSandwich = function() {
  console.log("Get one slice of bread");
  console.log("Add cheese");
  console.log("Put a slice of bread on top");
};

makeCheeseSandwich();

// Deel B
const makeSandwich = function(topping) {
  console.log("Get one slice of bread");
  console.log("Add " + topping);
  console.log("Put a slice of bread on top");
  console.log(
    "Congrats you have a sandwich with " + topping + " test test nice het werkt"
  );
};

makeSandwich("ham");
makeSandwich("chicken");
makeSandwich("peanut cheese");

// Deel C
/* const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
}; 

console.log(calculateDiscountedPrice(80, 6.6)); */

// Deel D
const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};

const calculateDiscountedPrice1 = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};

console.log(calculateDiscountedPrice(80, 6.6));
console.log(calculateDiscountedPrice1(24, 6.6));
