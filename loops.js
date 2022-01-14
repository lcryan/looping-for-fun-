/* Opdracht 1 */

call = ["Hoera!"];

for (let i = 0; i < 3; i++) {
    console.log(call[0]);
}


// Opdracht 2.

const word1 = ['loop...'];

for (let i = 0; i < 4; i++) {
    console.log(word1[0]);
    if (i >= 3)
        console.log("klaar!")
}


// Opdracht 3.

for (i = 0; i < 16; i++) {
    if(i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log (i + " is oneven");
    }
}

// Opdracht 4.

for (i = 0; i <= 9; i++){

    if(i <= 2){
        console.log("" + i);
    }
    else if(i >= 3 && i < 6){
        console.log(">" + i);
    }
    else {
        console.log(">>" + i);
    }
}