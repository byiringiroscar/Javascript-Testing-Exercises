const StringInput = require('./StringCount.js');
const reverseString = require('./StringReverse.js')
const Calculator = require("./Calculator");
const calc = new Calculator();
const capitalize = require("./capitalize.js");

test("capitalize first string", () => {
  expect(capitalize("oscar")).toBe("Oscar");
});

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers ", () => {
      expect(calc.add(6, 2)).toBe(8);
    });
  });
  describe("subtract", () => {
    test("subtract two numbers ", () => {
      expect(calc.subtract(6, 2)).toBe(4);
    });
  });
  describe("multiply", () => {
    test("multiply two numbers ", () => {
      expect(calc.multiply(6, 2)).toBe(12);
    });
  });
  describe("divide", () => {
    test("divide two numbers ", () => {
      expect(calc.divide(6, 2)).toBe(3);
    });
  });
});


test('check string counting', () => {
    expect(StringInput("zaba")).toBe(true);
  });

test("reverse the strings", () => {
expect(reverseString("oscar")).toBe("racso");
});