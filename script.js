/* Task 1

Create a function which counts the number of occurrences of a given letter in a string.

Example:

Input:

'e' and "I have some cheese"
Output:
5 */

function checkNumberOfOccurrences(letter, string) {
    const lowerLetter = letter.toLowerCase();
    const str = removePunctuation(string);
    let total = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (lowerLetter === char) {
            total++;
        }
    }

    return total;
}

function removePunctuation(string) {
    return str = string.replace(/\W/g, '').toLowerCase();
    // Removes all non-alphanumeric characters from the string, then converts to lowercase.
}

console.log(checkNumberOfOccurrences('e', 'I have some cheese'));

/* Task 2

Create a function which decides if a string is a palindrome.

Examples:

Input:

I have some cheese
Output:
False
Input:

God saved Eva’s dog
Output:
True */

function isPalindrome(string) {
    const str = removePunctuation(string);
    return str === str.split('').reverse().join('');
    /* split() splits the string into an array of substrings, with '' allowing separation by character.
    reverse() then reverses the array in place.
    join() converts the elements (in this case, reversed characters) of an array back into a string. */
}

console.log(isPalindrome('I have some cheese'));
console.log(isPalindrome("God saved Eva's dog"));
console.log(isPalindrome("saippuakivikauppias"));
console.log(isPalindrome("race CAR"));

/* Task 3

Part A)

Create a function which counts the number of occurrences of words from a "censored words list" in a text.

Example:

Input:

{"dog", "cat", "large"} and "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
Output:
cat: 1, dog: 2, large: 1, total: 4 */

function checkNumberOfOccurrencesCensored(list, text) {
    const str = removePunctuationKeepWhitespace(text);
    const splitText = str.split(" ");
    const map = convertListToMap(list);
    let total = 0;

    for (let i = 0; i < splitText.length; i++) {
        const word = splitText[i];

        if (map.has(word)) {
            map.set(word, (map.get(word)) + 1);
            total++;
        }
    }

    map.set("total", total);
    return map;
}

function removePunctuationKeepWhitespace(string) {
    return str = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
    /* Removes everything except alphanumeric characters and whitespace, 
    then collapses multiple adjacent whitespace to single spaces.

    Detailed explanation:

    1. \w is any digit, letter, or underscore.
    2. \s is any whitespace.
    3. [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
    4. [^\w\s]|_ is the same as #3 except with the underscores added back in. */
}

function convertListToMap(list) {
    const map = new Map();

    for (let i = 0; i < list.length; i++) {
        const word = list[i].toLowerCase();
        map.set(word, 0);
    }

    return map;
}

const list = ["dog", "cat", "large"];
const text = "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."

console.log(checkNumberOfOccurrencesCensored(list, text));