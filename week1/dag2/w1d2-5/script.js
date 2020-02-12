const age = 25;
const isFemale = true;
const driverStatus = "bob";
const name = "Dilara";
const totalAmount = 75;

if (age >= 18) {
  console.log("Je bent oud genoeg om binnen te komen");
} else {
  console.log("Je bent niet oud genoeg om binnen te komen");
}

if (isFemale === true) {
  console.log("Hey girl! Er is vanavond ladiesnight");
} else {
  console.log("Sorry er is vanavond ladiesnight, je mag niet naar binnen.");
}

if (driverStatus == "bob") {
  console.log("Je bent bob! Wat goed van je, je mag rijden");
} else {
  console.log("Je bent onder invloed, je mag niet rijden");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting");
} else {
  console.log("Je krijgt geen korting");
}

if (name == "Sarah" || name == "Bram") {
  console.log("Je krijgt een gratis biertje");
} else {
  console.log("Je krijgt geen gratis biertje");
}

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Je krijgt een gratis portie (vega)bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne");
} else {
  console.log("Vanaf 25eu krijg je gratis shit");
}
