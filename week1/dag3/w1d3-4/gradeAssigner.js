const assignGrade = function(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

for (i = 60; i <= 100; i++) {
  console.log(
    "If you have a score of " + i + ", you have a grade of " + assignGrade(i)
  );
}

document.write("This has been looped");

/* console.log("You have an: " + assignGrade(90));
console.log("You have an: " + assignGrade(83));
console.log("You have an: " + assignGrade(75));
console.log("You have an: " + assignGrade(65));
console.log("You have an: " + assignGrade(40)); */
