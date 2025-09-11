/* ================================
   PART 1: Variables & Conditionals
   ================================ */

// Declare global variables
let subject1, subject2, subject3, average, grade;

/* ================================
   PART 2: Custom Functions
   ================================ */

// Function 1: Calculate average marks
function calculateAverage(marksArray) {
  let total = 0;
  // PART 3: Loop Example #1 (for loop)
  for (let i = 0; i < marksArray.length; i++) {
    total += marksArray[i];
  }
  return total / marksArray.length;
}

// Function 2: Determine grade from average
function getGrade(avg) {
  // PART 1: Conditionals
  if (avg >= 70) return "A";
  else if (avg >= 60) return "B";
  else if (avg >= 50) return "C";
  else if (avg >= 40) return "D";
  else return "F";
}

/* ================================
   PART 4: DOM Interactions
   ================================ */

// Function to calculate and display grade
function calculateGrade() {
  // Get values from input fields
  subject1 = parseFloat(document.getElementById("subject1").value) || 0;
  subject2 = parseFloat(document.getElementById("subject2").value) || 0;
  subject3 = parseFloat(document.getElementById("subject3").value) || 0;

  // Store marks in an array
  let marks = [subject1, subject2, subject3];

  // PART 3: Loop Example #2 (for...of loop to check validity)
  for (let mark of marks) {
    if (mark < 0 || mark > 100) {
      document.getElementById("result").innerHTML = "⚠️ Please enter marks between 0 and 100!";
      return;
    }
  }

  // Calculate average and grade
  average = calculateAverage(marks);
  grade = getGrade(average);

  // Display result
  document.getElementById("result").innerHTML = `
    Average: ${average.toFixed(2)} <br>
    Grade: ${grade}
  `;
}
