// ========================================
//               Math-Level-1_1
// ========================================
console.log("%c  Math-Level-1_1", "color: lightblue; font-size: 16px;")

console.log(Math.PI);
console.log(Math.PI.toFixed(2));

// ========================================
//               Math-Level-1_2
// ========================================
console.log("%c  Math-Level-1_2", "color: lightblue; font-size: 16px;");

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const numRounder = (num) => {
    console.log(Math.round(num));
}

array.forEach((elt) => numRounder(elt));



// ========================================
//               Math-Level-1_3
// ========================================
console.log("%c  Math-Level-1_3", "color: lightblue; font-size: 16px;");

const randomNum = Math.random();
console.log(randomNum);
const randomNum1_10 = Math.floor(Math.random() * 10);
console.log(randomNum1_10);
const randomNum1_100 = Math.floor(Math.random() * 100);
console.log(randomNum1_100);

// ========================================
//               Math-Level-1_4
// ========================================
console.log("%c  Math-Level-1_4", "color: lightblue; font-size: 16px;");

let numArray = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];

console.log(Math.min(...numArray));
console.log(Math.max(...numArray));


// ========================================
//               Math-Level-2_1
// ========================================
console.log("%c  Math-Level-2_1", "color: lightblue; font-size: 16px;");

const roundTo = (Zahl, Genauigkeit) => console.log(Zahl.toFixed(Genauigkeit));
roundTo(3.1415926535, 5);

// ========================================
//               Math-Level-2_2
// ========================================
console.log("%c  Math-Level-2_2", "color: lightblue; font-size: 16px;");
const result = document.body.querySelector("p");
const input = document.body.querySelector("#number");
const btn = document.body.querySelector("#btn")
const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber)

const guessTheNumber = () => {
    console.log(input.value)
    if (Number(input.value) === randomNumber ) {
        result.textContent = `🔮🔮🔮🔮Great job 🥳🥳🥳🥳🥳🥳🥳 ${randomNumber} is exactly correct!🔮🔮🔮🔮`
        result.style.color = "green"
    } else {
        result.textContent = `Come on! take another one 😎`
        result.style.color = "red"
    }
}

btn.addEventListener("click", guessTheNumber);
