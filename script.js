/* Modify each variable as necessary to test different inputs for each task.
   Open index.html (Live Server VSCode plugin recommended for auto-refresh) to verify outputs within the console.*/

// Task 1:
const task1Letter = "e";
const task1Text = "I have some cheese";
console.log("Task 1 input: '" + task1Letter + "' and '" + task1Text + "'");
console.log("Task 1 output: Number of letter occurrences = " + checkNumberOfOccurrences(task1Letter, task1Text))

// Task 2:
const task2Text1 = "I have some cheese";
const task2Text2 = "God saved Eva's dog";
console.log("Task 2 input: '" + task2Text1 + "'");
console.log("Task 2 output: isPalindrome = " + isPalindrome(task2Text1))
console.log("Task 2 input: '" + task2Text2 + "'");
console.log("Task 2 output: isPalindrome = " + isPalindrome(task2Text2))

// Task 3A:
const list = ["dog", "cat", "large"];
const text = "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."
console.log("Task 3A input: '" + list +  "' and '" + text + "'");
console.log("Task 3A output (returned map below): ")
console.log(checkNumberOfOccurrencesCensored(list, text));

// Task 3B:
const censoredList = ["meow", "woof"];
console.log("Task 3B input: '" + censoredList + "'");
console.log("Task 3B output: " + censorWordsInText(censoredList, text))

// Task 3C:
const palindromeText = "Anna went to vote in the election to fulfil her civic duty.";
console.log("Task 3C input: '" + palindromeText + "'");
console.log("Task 3C output: '" + censorPalindromes(palindromeText))

function checkNumberOfOccurrences(letter, string) {
    const lowerLetter = letter.toLowerCase();
    const str = removePunctuationMakeLowerCase(string);
    let total = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (lowerLetter === char) {
            total++;
        }
    }

    return total;
}

function removePunctuationMakeLowerCase(string) {
    return str = string.replace(/\W/g, '').toLowerCase();
    // Removes all non-alphanumeric characters from the string, then converts to lowercase.
}

function isPalindrome(string) {
    const str = removePunctuationMakeLowerCase(string);
    return str === str.split('').reverse().join('');
    /* split() splits the string into an array of substrings, with '' allowing separation by character.
    reverse() then reverses the array in place.
    join() converts the elements (in this case, reversed characters) of an array back into a string. */
}

function checkNumberOfOccurrencesCensored(list, text) {
    const str = text;
    const splitText = str.split(" ");
    const map = convertListToMap(list);
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        const censoredWord = list[i];

        for (let j = 0; j < splitText.length; j++) {
            const word = splitText[j];

            if (word.includes(censoredWord)) {
                map.set(censoredWord, (map.get(censoredWord)) + 1);
                total++;
            }
        }
    }

    map.set("total", total);
    return map;

    /* Not happy with nested loop method for efficiency and performance.
       Can do one parse if looking for exact matches using map.has(), 
       but not sure how to use a map's key as a substring for includes(),
       e.g. seeing if "larger" contains "large" without further iteration. */
}

function removePunctuationKeepWhitespace(string) {
    return str = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
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

function censorWordsInText(list, text) {
    let str = text;
    const splitText = removePunctuationKeepWhitespace(text).split(" ");
    const regex = new RegExp(list.join("|"), "i");

    for (let i = 0; i < splitText.length; i++) {
        const word = splitText[i];
        const wordIsOnCensorList = regex.test(word);

        if (wordIsOnCensorList) {
            const censoredWord = censorWord(word);
            str = str.replaceAll(word, censoredWord);
        }
    }

    return str;
}

function censorWord(word) {
    let censoredWord = word;

    for (let i = 1; i < word.length - 1; i++) {
        censoredWord = replaceAt(censoredWord, i, "*");

        /* JavaScript quirk: If "$" is used as the censor symbol, the censorWordsInText function works incorrectly:
        For example, "Meow" should output "M$$w", but as soon as the function reaches str.replaceAll(), 
        the censored word somehow outputs as "M$w". Larger words are also missing more $ symbols, the amount of which 
        seem to correlate to half of the length of the word excluding the first and last characters, i.e. "larger" becomes "l$$r" 
        and "Testing" becomes "T$$$g". The censored word itself has the correct number of $'s (as verified by console.log()), 
        proving that the error only occurs when calling replace() and replaceAll() due to $ being a special character. */
    }

    return censoredWord;
}

function replaceAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

function censorPalindromes(text) {
    let str = text;
    const splitText = text.split(" ");

    for (let i = 0; i < splitText.length; i++) {
        const word = splitText[i];

        if (isPalindrome(word)) {
            const censoredWord = censorWord(word);
            str = str.replaceAll(word, censoredWord);
        }
    }

    return str;
}

module.exports = {
    checkNumberOfOccurrences,
    removePunctuationMakeLowerCase,
    isPalindrome,
    checkNumberOfOccurrencesCensored,
    convertListToMap,
    censorWordsInText,
    censorWord,
    replaceAt,
    censorPalindromes
}