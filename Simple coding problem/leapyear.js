// Leap Year
/**
 * simple year with leap year not 100% true if the year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear2 = isLeapYear(2001);
console.log(leapYear2);

/**
 *  those year that is not divisible by 100, but if the year is divisible by 4
 * then the year will be a leap year
 */

function isLeapYearM(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const leapYear1 = isLeapYearM(2100);
const leapYear5 = isLeapYearM(2400);
const leapYear3 = isLeapYearM(1900);
const leapYear4 = isLeapYearM(2052);
console.log(leapYear1, leapYear5, leapYear3, leapYear4);
