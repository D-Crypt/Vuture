const { test } = require("@jest/globals");
const scriptFunctions = require("./script");
const checkNumberOfOccurrences = scriptFunctions.checkNumberOfOccurrences;
const removePunctuationMakeLowerCase = scriptFunctions.removePunctuationMakeLowerCase;
const isPalindrome = scriptFunctions.isPalindrome;
const checkNumberOfOccurrencesCensored = scriptFunctions.checkNumberOfOccurrencesCensored;
const convertListToMap = scriptFunctions.convertListToMap;

const list = ["dog", "cat", "large"];
const text = "I have a cat named Meow and a dog name Woof. I love the dog a lot. He is larger than a small horse."

test("Counts the number of occurrences of a given letter in a string", () => {
    expect(checkNumberOfOccurrences("e", "I have some cheese")).toBe(5);
    expect(checkNumberOfOccurrences("o", "onomatoepia")).toBe(3);
    expect(checkNumberOfOccurrences("l", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")).toBe(3);
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