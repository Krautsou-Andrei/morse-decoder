const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let arrayWords = expr.split("**********");

  let prase = "";

  arrayWords.forEach((element) => {
    let arrayLetters = [];
    let word = "";
    for (let i = 0; i < element.length / 10; i++) {
      arrayLetters.push(element.slice(i * 10, i * 10 + 10));
    }

    arrayLetters.forEach((element) => {
      let arrayElementMorse = [];
      let letterMorse = "";
      let letter = "";
      for (let i = 0; i < element.length / 2; i++) {
        arrayElementMorse.push(element.slice(i * 2, i * 2 + 2));
      }

      arrayElementMorse.forEach((element) => {
        if (element == "10") {
          letterMorse = letterMorse + ".";
        }
        if (element == "11") {
          letterMorse = letterMorse + "-";
        }
      });

      function coding(letterMorse) {
        letter = MORSE_TABLE[letterMorse];

        word = word + letter;
      }

      coding(letterMorse);
    });

    prase = prase + " " + word;
  });

  return prase.trim();
}

module.exports = {
  decode,
};
