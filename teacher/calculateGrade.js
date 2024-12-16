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
  const projectPoints = parseFloat(readline.question("Project points (0-40):"));
  const peerReviewAverage = parseFloat(
    readline.question("Peer review average (0-5):")
  );
  const personalModifier = parseInt(
    readline.question("Personal points modifier:") || 0
  );

  const personalPoints = Math.min(
    calculatePersonalPoints(peerReviewAverage) + personalModifier,
    20
  );

  const totalPoints = projectPoints + personalPoints;
  const grade = calculateGrade(totalPoints);

  console.log(`
    <p>Here is your assesment:</p>
    <ul>
      <li>Project points: ${projectPoints.toFixed(1)}/40</li>
      <li>Personal points: ${personalPoints.toFixed(1)}/20</li>
      <li>Total points: ${totalPoints.toFixed(1)}/60</li>
      <li>Grade: ${grade.toFixed(1)}/5</li>
    </ul>
    <p>
      Let me know if you have any questions about the assesment.
    </p>
  `);

  console.log("---");
}
