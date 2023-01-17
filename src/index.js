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
  const dashesAndDotArr = expr
    .match(/.{1,10}/g)
    .map((i) => i.match(/.{1,2}/g))
    .map((it) => {
      const arr = [];
      it.forEach((item) => {
        if (item === "10") arr.push(".");
        if (item === "11") arr.push("-");
      });
      return arr.join("");
    });
  const res = dashesAndDotArr.map((i) => (i === "" ? " " : MORSE_TABLE[i])).join("");
  return res;
}

module.exports = {
  decode,
};
