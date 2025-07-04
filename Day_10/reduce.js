const marks = [90, 84, 82, 95, 30];

const topMark = marks.reduce((max, curr) => {
  if (max > curr) {
    return max;
  } else {
    return curr;
  }
});

const topMark1 = marks.reduce((max, curr) => {
  return max > curr ? max : curr;
});

const topMark2 = marks.reduce((max, curr) => (max > curr ? max : curr));

// Task 1.1
// Use Reduce
// Find the top score
// Output
// 95

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

// Task 1.2
// Use Reduce
// Find the top scorer name
// Output
// Debra Beard

const topScorer = scores.reduce((topStudent, student) =>
  topStudent.marks > student.marks ? topStudent : student
);

console.log(`${topScorer.name} scored ${topScorer.marks}`);