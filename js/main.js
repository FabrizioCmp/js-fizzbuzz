// dichiarazione variabili-costanti
const text3 = "Fizz"
const text5 = "Buzz"


// ciclo e condizioni sui 100 numeri
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(text3 + text5);
    } else if (i % 5 === 0) {
        console.log(text5);
    } else if (i % 3 === 0) {
        console.log(text3);
    } else {
        console.log(`${i}`);
    }
}