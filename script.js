// ======================
// Part 1: Variables & Conditionals
// ======================
let age = 18;
let name = "Tom";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// ======================
// Part 2: Custom Functions
// ======================
function greet(userName) {
  return "Hello, " + userName + "!";
}

function square(number) {
  return number * number;
}

console.log(greet(name));
console.log("Square of 5 is:", square(5));

// ======================
// Part 3: Loops
// ======================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ======================
// Part 4: DOM Interactions
// ======================

// 1. Change text of an element
document.getElementById("title").textContent = "JavaScript Project Demo";

// 2. Add event listener to button
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Button was clicked!";
});

// 3. Add items to list dynamically
let fruits = ["Apple", "Banana", "Mango"];
let list = document.getElementById("list");

fruits.forEach(function (fruit) {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
});