/*Task 1

Create a function which counts the number of occurrences of a given letter in a string.

Example:

Input:

'e' and "I have some cheese"
Output:
5*/

function checkNumberOfOccurrences(letter, string) {
    let total = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (letter == char) {
            total++;
        }
    }

    return total;
}

console.log(checkNumberOfOccurrences("e", "I have some cheese"));