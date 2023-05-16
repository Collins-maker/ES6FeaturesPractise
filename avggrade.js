const students = [
  { name: 'David', marks: 80 },
  { name: 'Vinoth', marks: 77 },
  { name: 'Divya', marks: 88 },
  { name: 'Ishitha', marks: 95 },
  { name: 'Thomas', marks: 68 }
];

// Function to compute average marks
function computeAverageMarks(students) {
  let totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
  }
  return totalMarks / students.length;
}

// Function to determine grades
function determineGrade(marks) {
  if (marks < 60) {
    return 'F';
  } else if (marks < 70) {
    return 'D';
  } else if (marks < 80) {
    return 'C';
  } else if (marks < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

// Compute average marks
const averageMarks = computeAverageMarks(students);
console.log('Average Marks:', averageMarks.toFixed(2));

// Determine grades for each student
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const grade = determineGrade(student.marks);
  console.log(student.name, 'Grade:', grade);
}
