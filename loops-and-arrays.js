// Opdracht 1 (sorry, de text staat nog in de originele file)

const names = ["Henk", "Piet", "Fred", "Joop"];
for(i = 0; i < names.length; i++) {
    console.log(names[i] + "je");
}

// Opdracht 2

numbers = [2, 4, 5, 29, 38];

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
     numbers[i]= numbers[i] * 2;
}
     else{numbers[i] = numbers[i] * 3}
}
console.log(numbers);

// Opdracht 3

const squares = [30, 2, 8, 24, 11];
let y = 0;
for (i = 0; i < squares.length; i++) {
    const answer = squares[i] **3
    squares[i] = `Het volumen van ${squares[i]} is ${answer}`;
}
console.log(squares);
/*End of code, thanks for checking*/
