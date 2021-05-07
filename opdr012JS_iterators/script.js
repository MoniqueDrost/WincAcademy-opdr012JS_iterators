/* //while
let colors= ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colors.length){
    console.log(colors[i]);
    i++;
} 
*/

/* //for
let colors= ['yellow', 'blue', 'red', 'orange']

for (i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
*/

/* //foreach
let colors=['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element)); */

/* 
1. Hoeveel regels neemt de methode in beslag:
- for loopt: 5
- while loop: 7 
2. Hoeveel regels neemt forEAch in beslag:
- 2
3. Welke voordelen heeft array method nog meer t.o.v. een for of while loop?
- naar mijn idee is het veiliger, omdat als je bij de while een max. voorwaarde vergeet,
je pc vastloopt. Ook is 'forEach' makkelijk te lezen, omdat je meteen snapt wat er wordt bedoeld.
4. zie hieronder
*/

let obj = {
    name: "Simon",
    age: "20",
    clothing: "jeans",
    shoes: "boots",
    hairColor: "brown"
}

for(let propt in obj){
    console.log(propt + ': ' + obj[propt]);
}
/*dit is geen itereren denk ik, volgens mij geef je nu aan dat je gewoon alle properties 
binnen dit object wilt zien*/