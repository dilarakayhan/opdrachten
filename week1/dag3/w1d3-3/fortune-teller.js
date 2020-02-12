const tellFortune = function(
  jobTitle,
  geographicLocation,
  partnerName,
  numChildren
) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      geographicLocation +
      ", and married to " +
      partnerName +
      " with " +
      numChildren +
      " kids."
  );
};

tellFortune("trash developer", "Arnhem", "Thom", 2);
tellFortune("succesful developer", "Den Haag", "Thom", 1);
tellFortune("chef", "Utrecht", "Dilara", 125);

// fortune-teller.js
