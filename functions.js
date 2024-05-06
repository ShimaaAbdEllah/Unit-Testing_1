function sumArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
function subArgs() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result -= arguments[i];
  }

  return result;
}

function multiplyArgs() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
function maxArgs() {
  let result = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > result) {
      result = arguments[i];
    }
  }

  return result;
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
const shuffle = (array) => {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function makeid(l) {
  var text = "";
  var char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }

  return text;
}

function isPalindrome(str) {
  const pattStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = pattStr.split("").reverse().join("");
  return pattStr === reversedStr;
}

module.exports = {
  sumArgs,
  multiplyArgs,
  factorial,
  fibonacci,
  isPrime,
  subArgs,
  isPalindrome,
  maxArgs,
  shuffle,
  makeid,
};
