const age = 26;
const isFemale = false;
const driverStatus = "bob";
const name = "Thom";
const totalAmount = 125;

if (age >= 18 && isFemale == true) {
  console.log("Je mag binnen!");
} else {
  console.log("Sorry, maar je mag niet naar binnen.");
}

if (driverStatus == "bob" && age >= 18) {
  console.log("Je bent in staat om te rijden!");
} else {
  console.log("Sorry maar je bent niet in staat om te rijden.");
}

if (age >= 18 && age <= 25) {
  console.log("Krijg 50% korting.");
} else {
  console.log("Betaal de volle prijs.");
}

if (name == "Sarah" || name == "Bram") {
  console.log("Je krijgt een gratis biertje");
} else {
  console.log("Je hebt een kut naam, je krijgt geen gratis bier.");
}

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Krijg gratis (vega)bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Krijg gratis Nachos");
} else if (totalAmount >= 100) {
  console.log("Krijg een gratis fles champagne");
} else {
  console.log("Je moet toch echt meer geld gaan uitgeven");
}
