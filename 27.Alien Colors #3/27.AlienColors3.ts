// version 1    choose green color
let alien_color: string = "green";


//If the alien is green, print a message that the player earned 5 points.
if(alien_color === "green"){
    console.log("you have earned '5' points");

//If the alien is yellow, print a message that the player earned 10 points.
} else if (alien_color === "yellow"){
    console.log("you have earned '10'points ")

//If the alien is red, print a message that the player earned 15 points.
} else if(alien_color === "red"){
    console.log("you have earned '15' points");
}
    

// version 2    choose yellow color
alien_color = "yellow";
if(alien_color == "green"){
    console.log("you have earned '5' points");   
} else if (alien_color == "yellow"){
    console.log("you have earned '10'points ")
} else if(alien_color == "red"){
    console.log("you have earned '15' ");
}


// version 3  choose red color
alien_color = "red";
if(alien_color == "green"){
    console.log("you have earned '5' points");   
} else if (alien_color == "yellow"){
    console.log("you have earned '10' points");
} else if(alien_color == "red"){
    console.log("you have earned '15' points");
}




// //let try this program with map and code reading is much eazy this is my own version

// // make a array of colours names

// let colours = ["green","yellow","red"]


// //print all veersion with array.map method

// colours.map(colour => {
//     if(colour == "green"){
//         console.log(`you earned 5 points`);
        
//     }else if(colour == "yellow"){
//         console.log(`you earned 10 points`);
//     }else if(colour == "red"){
//         console.log(`you earned 15 points`);
//     } 
// })