const { test } = require("@jest/globals");
const scriptFunctions = require("./script");
const checkNumberOfOccurrences = scriptFunctions.checkNumberOfOccurrences;
const removePunctuationMakeLowerCase = scriptFunctions.removePunctuationMakeLowerCase;
const isPalindrome = scriptFunctions.isPalindrome;
const checkNumberOfOccurrencesCensored = scriptFunctions.checkNumberOfOccurrencesCensored;
const convertListToMap = scriptFunctions.convertListToMap;
const censorWordsInText = scriptFunctions.censorWordsInText;
const censorWord = scriptFunctions.censorWord;
const replaceAt = scriptFunctions.replaceAt;
const censorPalindromes = scriptFunctions.censorPalindromes;

const list = ["dog", "cat", "large"];
const text = "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."

test("Counts the number of occurrences of a given letter in a string", () => {
    expect(checkNumberOfOccurrences("e", "I have some cheese")).toBe(5);
    expect(checkNumberOfOccurrences("o", "onomatoepia")).toBe(3);
    expect(checkNumberOfOccurrences("L", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")).toBe(3);
})

test("Remove punctuation from a string, then convert to lowercase", () => {
    expect(removePunctuationMakeLowerCase("A'b,C;d!E£f$g\"h")).toBe("abcdefgh");
})

test("Checks if string is a palindrome", () => {
    expect(isPalindrome("I have some cheese")).toBe(false);
    expect(isPalindrome("God saved Eva's dog")).toBe(true);
    expect(isPalindrome("saippuakivikauppias")).toBe(true);
    expect(isPalindrome("race CAR")).toBe(true);
})

test("Counts the number of occurrences of words from a 'censored words list' in a text", () => {
    const map = new Map();
    map.set("dog", 2);
    map.set("cat", 1);
    map.set("large", 1);
    map.set("total", 4);

    expect(checkNumberOfOccurrencesCensored(list, text)).toEqual(map);
})

test("Converts a list into a map with each key's value initialised to 0", () => {
    const map = new Map();
    map.set("dog", 0);
    map.set("cat", 0);
    map.set("large", 0);

    expect(convertListToMap(list)).toEqual(map);
})

test("Censor words featured in the 'censored words list' that appear in the text", () => {
    const listOne = ["meow", "woof"];
    const listTwo = ["MEOW", "WOOF", "DoG", "Large", "Horse"];

    expect(censorWordsInText(listOne, text)).toBe("I have a cat named M**w and a dog name W**f. I love the dog a lot. He is larger than a small horse.");
    expect(censorWordsInText(listTwo, text)).toBe("I have a cat named M**w and a d*g name W**f. I love the d*g a lot. He is l****r than a small h***e.");
})

test("Censor each character in a word, except for the first and last characters", () => {
    expect(censorWord("meow")).toBe("m**w");
    expect(censorWord("woof")).toBe("w**f");
    expect(censorWord("PUNCTUATION.")).toBe("P**********.");
})

test("Replace a single character within a string", () => {
    expect(replaceAt("string", 0, "S")).toBe("String");
    expect(replaceAt("TESTING", 3, "t")).toBe("TEStING");
    expect(replaceAt("PuNcTuAtIoN!", 11, "?")).toBe("PuNcTuAtIoN?");
})

test("Censor single word palindromes in a text", () => {
    expect(censorPalindromes("Anna went to vote in the election to fulfil her civic duty")).toBe("A**a went to vote in the election to fulfil her c***c duty");
    expect(censorPalindromes("Madam Arora teaches malayalam")).toBe("M***m A***a teaches m*******m");
})