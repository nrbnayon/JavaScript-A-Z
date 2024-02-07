// 12 inch = 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const nayonHeight = inchToFeet(75);
console.log(nayonHeight);

// Deferent option same as above

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch";
  return result;
}

const nayonHeight2 = inchToFeet2(75);
console.log("New", nayonHeight2);

function milesToKm(miles) {
  const kilometers = miles * 1.60934;
  return kilometers;
}

const kilometers = milesToKm(5);
console.log("kilometers", kilometers);
