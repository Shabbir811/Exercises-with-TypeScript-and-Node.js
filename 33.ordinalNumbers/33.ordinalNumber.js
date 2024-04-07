"use strict";
// Store the numbers 1 through 9 in a array.
let ordinal = [];
//create array through loop  1 to 9 
for (let num = 1; num <= 9; num++) {
    ordinal.push(num);
}
ordinal.map(num => {
    let order = "th";
    if (num == 1) {
        order = num + "st";
    }
    else if (num == 2) {
        order = num + "nd";
    }
    else if (num == 3) {
        order = num + "rd";
    }
    else {
        order = num + "th";
    }
    console.log(order);
});
// ordinal.map(num =>{
//     console.log(num);
// })
// if(i == 1){
//    ordinal.push(i+"st")
//  }else if(i == 2){
//    ordinal.push(i+"nd")
// }else if(i == 3){
//    ordinal.push(i+"rd")
// }else{
//    ordinal.push(i+"th")
// } 
