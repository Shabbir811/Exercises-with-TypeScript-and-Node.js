

// Make a array of magician’s names
 let magicians: string[] = ["herry potter", "kaala jaduger", "samari jaduger"]

//creating a function called show_magicians(), which prints the name of each magician in the  array.
function show_magicians(magicianNames:string[]){
    magicianNames.map(name =>{console.log(name);
    })
}


//creating a function that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magicianNames:string[]){
    for(let i=0; i<magicianNames.length; i++){
        console.log(` ${magicianNames[i] = 'the great ' + magicianNames[i] }`);
        
    }
}






//call function which modifies the array of magicians by adding the phrase the Great to each magician’s name.
     make_great(magicians);
    // Call show_magicians() to see that the list has actually been modified.
     show_magicians(magicians);
  