const input = document.getElementById("input");
const button = document.getElementById("btn");
const romanText = document.getElementById("roman");

button.addEventListener("click", showInput);
let acc = "";

function showInput() {
    console.log('hello')
    romanNumerals()
    romanText.innerText += acc
}

function romanNumerals(num) {
    const numerals = {
        1000: 'M',
        900: 'CM',
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    const reverse = Object.keys(numerals).reverse();

    
    const roman = reverse.forEach(item => {
        while (item <= input.value) {
            acc += numerals[item];
            input.value -= item;
        };
    });
    return acc

};

// console.log(romanNumerals(50));



