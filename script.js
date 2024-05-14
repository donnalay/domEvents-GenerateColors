const btn = document.querySelector('button[id="v2"]');

btn.onclick = function () {
  console.log("button clicked");
  console.log("hope it worked!");
};

//recall different ways to write functions
//assign function to variable
const scream = function () {
  console.log("AHHH");
  console.log("STOP!");
};
//regular function expression
function scream1() {
  console.log("AHHH");
  console.log("STOP!");
}
//arrow function
const scream2 = () => {
  console.log("AHHH");
  console.log("STOP!");
};

btn.onmouseenter = scream;

//what happens if you inspect an element that has JS set inline? - the event will appear as set to a function when using console.dir('object')

//we've been working with buttons, but events can be set on any element.

//the event needs to be set to a function, if you set it to the lines of code instead, it will just execute those immediately. Which is not intended.

document.querySelector("h1").onclick = function () {
  console.log("clicked on h1");
};

const btn1 = document.querySelector('button[id="v3"]');

btn1.addEventListener("click", () => {
  console.log("button clicked");
});

btn1.addEventListener("mouseenter", function () {
  console.log("mouse enter");
});
btn1.addEventListener("mouseleave", scream);

//-----------------------
//Random color exercise
//-----------------------
//click a button, set background color, change text of H1 to the name of the RGB color.

const colorButton = document.querySelector('button[id = "colorChange"]');
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

//random generate RGB - rough work
//3 numbers, 0-255
// function generateNum() {
//   let num = Math.floor(Math.random() * 2) + 1;
//   return num;
// }
// function generateNum2() {
//   let num = Math.floor(Math.random() * 5) + 1;
//   return num;
// }

//print more info
// function genColor() {
//   const nums = [];
//   for (let i = 0; i < 9; i++) {
//     if (i === 0 || i === 3 || i === 6) {
//       console.log(`RUN: ${i}`);
//       let num = Math.floor(Math.random() * 2) + 1;
//       console.log(num);
//       nums.push(num);
//     } else {
//       console.log(`RUN: ${i}`);
//       let num = Math.floor(Math.random() * 5) + 1;
//       console.log(num);
//       nums.push(num);
//     }
//   }
//   console.log(
//     `RGB(${nums[0]}${nums[1]}${nums[2]},${nums[3]}${nums[4]}${nums[5]},${nums[6]}${nums[7]}${nums[8]})`
//   );
// }

//print less info
// const genClr = function () {
//   const nums = [];
//   for (let i = 0; i < 9; i++) {
//     if (i === 0 || i === 3 || i === 6) {
//       let num = Math.floor(Math.random() * 2) + 1;
//       nums.push(num);
//     } else {
//       let num = Math.floor(Math.random() * 5) + 1;
//       nums.push(num);
//     }
//   }
//   //can we simplify this part?
//   const newColor = `RGB(${nums[0]}${nums[1]}${nums[2]},${nums[3]}${nums[4]}${nums[5]},${nums[6]}${nums[7]}${nums[8]})`;
//   return newColor;
// };

//less manual output
const genClr = function () {
  //store function
  //create array
  const nums = [];
  //generate random numbers
  for (let i = 0; i < 9; i++) {
    //for specific index, generate between 0-2
    if (i === 0 || i === 3 || i === 6) {
      let num = Math.floor(Math.random() * 2);
      //push generated number to array
      nums.push(num);
      //for all other numbers, generate between 0-5
    } else {
      let num = Math.floor(Math.random() * 5);
      //push generated number to array
      nums.push(num);
    }
  }
  //store generated numbers in a single string
  const genNum = nums.join("");
  //create string of nums with commas
  const color =
    genNum.slice(0, 3) + "," + genNum.slice(3, 6) + "," + genNum.slice(6, 9);
  //create string representing new RGB code
  const newColor = `RGB(${color})`;
  //print out new RGB code
  console.log(newColor);
  //return RGB code
  return newColor;
};

//simplified
const rgb = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorCode = `RGB(${r}, ${g}, ${b})`;
  console.log(colorCode);
  return colorCode;
};

//create function
function changeColor() {
  //set the background color of body to generated color
  body.style.backgroundColor = rgb();
  //change h1 text to set background color
  h1.innerText = `bg color: ${body.style.backgroundColor}`;
}

//on click of button, run function changeColor
colorButton.addEventListener("click", changeColor);
