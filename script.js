const input = document.getElementById("input");
const button = document.getElementById("btn");
const romanText = document.getElementById("roman");

button.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showInput();
    }
});

function romanNumerals(num) {
    let acc = "";
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
    reverse.forEach(item => {
        while (item <= num) {
            acc += numerals[item];
            num -= item;
        };
    });
    console.log(acc)
    return acc
};

function showInput() {
    romanText.innerHTML +=  romanNumerals(parseInt(input.value))
    setTimeout(() => {
        romanText.innerHTML = "";
        input.value = "";
    }, 5000)
}





