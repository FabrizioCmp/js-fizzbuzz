// dichiarazione variabili-costanti
const text3 = "Fizz";
const text5 = "Buzz";
const boxEl = document.querySelector(".box");


// ciclo e condizioni sui 100 numeri
for (let i = 1; i <= 100; i++) {
    let text = "";
    let bkgColor = ""; // classi bkg definite in CSS

    // output in base alla divisibilità 
    if (i % 3 === 0 && i % 5 === 0) {

        console.log(text3 + text5);
        text = text3 + text5;
        bkgColor = "bkg_FizzBuzz";
    } else if (i % 5 === 0) {

        console.log(text5);
        text = text5;
        bkgColor = "bkg_Buzz";
    } else if (i % 3 === 0) {
    
        console.log(text3);
        text = text3;
        bkgColor = "bkg_Fizz";
    } else {

        console.log(`${i}`);
        text = i;
        bkgColor = "bkg_number";
    }

    boxEl.innerHTML += `<div class="square ${bkgColor}">${text}</div>`; 
}