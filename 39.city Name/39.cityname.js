"use strict";
// Write a function called city_country() that takes in the name of a city and 
function city_country(city, country = "'pakistan'") {
    return `${city},${country}`;
}
// its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
console.log(city_country("'karachi'"));
console.log(city_country("'islamabad'"));
console.log(city_country("'madina'", "'saudi arab'"));
