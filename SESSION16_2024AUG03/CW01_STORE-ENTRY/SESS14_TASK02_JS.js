let userInputString = prompt("Please enter your input: ");
console.log("User input is:", userInputString);

const words = userInputString.split(" ");
let largestWord = words[0];
let largestWordLength = words[0].length;

for (let i = 1 ; i < words.length ; i++) {
    if (words[i].length > largestWordLength) {
        largestWord = words[i];
        largestWordLength = words[i].length;
    }
}

console.log('The word with the maximum length is ' + largestWord + ' and its length is ' + largestWordLength);
