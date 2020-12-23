const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters("javascript"), "Javascript");

assert.strictEqual(
  capitalizeFirstLetters("javascript roule sur PHP"),
  "Javascript Roule Sur PHP"
);

assert.strictEqual(capitalizeFirstLetters(""), "");
