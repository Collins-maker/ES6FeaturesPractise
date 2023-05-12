const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {
  let selected_ending= o[i < 3 ? i+1 : 0]; // the ending for the choice made(1st, 2nd, 3rd, )
  console.log(`${i+1}${selected_ending} choice is ${color[i]}.`); // output the formatted string
}
