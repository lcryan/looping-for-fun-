// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
//const call = ["Hoera!"];

//for (let i = 0; i < 3 ; i++) {
//    console.log(call[0]);
//}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
const word1 = ['loop...'];

for (let i = 0; i < 4; i++) {
    console.log(word1[0]);
    if (i >=3)
        console.log("klaar!")
}


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven
// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

for (i = 0; i < 16; i++) {
    if(i % 2 === 0) {
        console.log(i + " is even");
    }
       else {
            console.log (i + " is oneven");
        }
    }
// ==========================================


