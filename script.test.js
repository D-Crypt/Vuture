const { test } = require("@jest/globals");
const checkNumberOfOccurrences = require("./script");

test("Counts the number of occurrences of a given letter in a string", () => {
    expect(checkNumberOfOccurrences("e", "I have some cheese")).toBe(5);
    expect(checkNumberOfOccurrences("o", "onomatoepia")).toBe(3);
    expect(checkNumberOfOccurrences("l", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")).toBe(3);
})