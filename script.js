/*Task 1

Create a function which counts the number of occurrences of a given letter in a string.

Example:

Input:

'e' and "I have some cheese"
Output:
5*/

function checkNumberOfOccurrences(letter, string) {
    const lowerLetter = letter.toLowerCase();
    const str = convertString(string);
    let total = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (lowerLetter === char) {
            total++;
        }
    }

    return total;
}

function convertString(string) {
    // Removes all non-alphanumeric characters from the string, then converts to lowercase.
    return str = string.replace(/\W/g, '').toLowerCase();
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
    const str = convertString(string);
    return str === str.split('').reverse().join('');
    /* split() splits the string into an array of substrings, with '' allowing separation by character.
    reverse() then reverses the array in place.
    join() converts the elements (in this case, reversed characters) of an array back into a string. */
}

console.log(isPalindrome('I have some cheese'));
console.log(isPalindrome("God saved Eva's dog"));
console.log(isPalindrome("saippuakivikauppias"));
console.log(isPalindrome("race CAR"));