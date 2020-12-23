const assert = require("assert");

/* function capitalizeFirstLetters(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if ((i = 0)) {
      result += input[0].toUppercase();
      wq;
    } else if (input[i - 1] === " ") {
      result += input[i].toUppercase();
    } else {
      result += input[i];
    }
  }
  return result;
} */

function capitalizeFirstLetters(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output += input[0].toUpperCase();
    } else if (input[i - 1] === " ") {
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
}

/* console.log(capitalizeFirstLetters("coucou")); */

assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters("javascript"), "Javascript");

assert.strictEqual(
  capitalizeFirstLetters("javascript roule sur PHP"),
  "Javascript Roule Sur PHP"
);

assert.strictEqual(capitalizeFirstLetters(""), "");
