const readline = require("readline-sync");

const MIN_PASS_TOTAL_POINTS = 36;
const MAX_TOTAL_POINTS = 60;
const MAX_PERSONAL_POINTS = 20;

function calculateGrade(points) {
  if (points < MIN_PASS_TOTAL_POINTS) {
    return 0;
  } else if (points >= MAX_TOTAL_POINTS) {
    return 5;
  } else {
    return (
      ((points - MIN_PASS_TOTAL_POINTS) /
        (MAX_TOTAL_POINTS - MIN_PASS_TOTAL_POINTS)) *
        5 +
      1
    );
  }
}

function calculatePersonalPoints(peerReviewAverage) {
  if (peerReviewAverage <= 1) {
    return 0;
  } else {
    return ((peerReviewAverage - 1) / (5 - 1)) * MAX_PERSONAL_POINTS;
  }
}

while (true) {
  const projectPoints = parseInt(readline.question("Project points (0-40):"));
  const peerReviewAverage = parseInt(
    readline.question("Peer review average (0-5):")
  );
  const personalModifier = parseInt(
    readline.question("Personal points modifier:")
  );

  const personalPoints = Math.min(
    calculatePersonalPoints(peerReviewAverage) + personalModifier,
    20
  );

  const totalPoints = projectPoints + personalPoints;
  const grade = calculateGrade(totalPoints);

  console.log(`Project points: ${projectPoints}/40`);
  console.log(`Personal points: ${personalPoints}/20`);
  console.log(`Total points: ${totalPoints}/60`);
  console.log(`Grade: ${grade}/5`);
  console.log("---");
}
