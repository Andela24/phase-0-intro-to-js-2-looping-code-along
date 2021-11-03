// Code your solutions in this file
/*const names = ["Ada", "Brendan", "Ali"];
const event1 = "birthday";

function writeCards (names, event) {
for (let i = 0; i < names.length; i++) {
    console.log (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   
}
return names;

}
writeCards(names, event1);*/

/* const gifts = ["teddy","drone", "doll"];

function wrapGifts(gifts){
let i = 0;
while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
}
return gifts;
}
wrapGifts(gifts); */

const number = 10;
function countDown(number){
    let i = 10;
    while (i >= 0) {
      console.log(i--);
}
return number;
}
countDown(number);
