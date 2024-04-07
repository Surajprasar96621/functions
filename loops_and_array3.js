let numbersArray = [2, 3, 7, 8, 10.13, 15, 18, 34, 25];

const doublesArray = numbersArray.map((num) => num * 2);
console.log("Doubles Array:", doublesArray);

const evenNumbersArray = numbersArray.filter((num) => num % 2 === 0);
console.log("Even Numbers Array:", evenNumbersArray);

const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);
