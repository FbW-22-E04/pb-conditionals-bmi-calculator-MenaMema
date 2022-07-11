//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 1.65;
const markMass = 72.5;
const johnHeight = 1.55;
const jonhMass = 65;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = jonhMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreBeefCake = markBMI > johnBMI;
console.log(markMoreBeefCake);

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  `Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
  console.log(markBMI.toFixed(2));
} else {
  console.log(johnBMI.toFixed(2));
}
