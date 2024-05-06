const {
  sumArgs,
  multiplyArgs,
  maxArgs,
  factorial,
  fibonacci,
  isPrime,
  subArgs,
  isPalindrome,
  shuffle,
  makeid,
} = require("./functions");

test("sum args adds args", () => {
  const result = sumArgs(10, 20, 30, 40);
  const expected = 100;
  expect(result).toBe(expected);
});
test("subtract subtract args ", () => {
  const result = subArgs(10, 5, 3);
  const expected = 2;
  expect(result).toBe(expected);
});

test("multiply mult args", () => {
  const result = multiplyArgs(5, 10, 2, 3);
  const expected = 300;
  expect(result).toBe(expected);
});
test("max args", () => {
  const result = maxArgs(5, 10, 2, 3);
  const expected = 10;
  expect(result).toBe(expected);
});
test("factorialy", () => {
  const result = factorial(5);
  const expected = 120;
  expect(result).toBe(expected);
});
test("fibonacci", () => {
  const result = fibonacci(5);
  const expected = [0, 1, 1, 2, 3];
  expect(result).toEqual(expected);
});
test("isPrime", () => {
  const result = isPrime(7);
  const expected = true;
  expect(result).toBe(expected);
});
test("isPalindrome", () => {
  const result = isPalindrome("noon");
  const expected = true;
  expect(result).toBe(expected);
});

test("shuffle", () => {
  const mathSpy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(2 / 3)
    .mockReturnValueOnce(2 / 2)
    .mockReturnValueOnce(1 / 1);
  expect(shuffle([1, 2, 3])).toEqual([3, 1, 2]);
  expect(mathSpy).toHaveBeenCalledTimes(3);
  mathSpy.mockRestore();
});

test("makeid", () => {
  const mathSpy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(1 / 62)
    .mockReturnValueOnce(1 / 62)
    .mockReturnValueOnce(2 / 62);
  expect(makeid(3)).toBe("BBC");
  expect(mathSpy).toHaveBeenCalledTimes(3);
  mathSpy.mockRestore();
});
// function test(title, callback) {
//   try {
//     callback();
//     console.log(`✅ ${title}`);
//   } catch (error) {
//     console.error(`❌ ${title}`);
//     console.error(error);
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`);
//       }
//     },
//   };
// }
