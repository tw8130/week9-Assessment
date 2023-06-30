//Write a JavaScript program to find the leap years in a given range of years.
function leapYearRange(startYear, endYear) {
    const leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

const startYear = 1990;
const endYear = 2023;
const leapYearsInRange = leapYearRange(startYear, endYear);

console.log("Leap years between", startYear, "and", endYear, "are");
console.log(leapYearsInRange); //output: Leap years between 1990 and 2023 are
// [
//     1992, 1996, 2000,
//     2004, 2008, 2012,
//     2016, 2020
// ]