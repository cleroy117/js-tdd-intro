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

module.exports = capitalizeFirstLetters;
