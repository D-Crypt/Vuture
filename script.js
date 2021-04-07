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

        if (letter === char) {
            total++;
        }
    }

    return total;
}

console.log(checkNumberOfOccurrences('e', 'I have some cheese'));

/*Task 2

Create a function which decides if a string is a palindrome.

Examples:

Input:

I have some cheese
Output:
False
Input:

God saved Eva’s dog
Output:
True*/

function isPalindrome(string) {
    // We only want to traverse until the middle of the string when comparing characters.
    let length = Math.floor(string.length / 2);

    for (let i = 0; i < length; i++) {
        let current = string[i];
        let last = string[string.length - i - 1];

        if (current !== last) return false;
    }

    return true;
}

console.log(isPalindrome('anna'));