const readline = require("readline-sync");

function calculateGrade(points) {
  if (points < 36) {
    return 0;
  } else if (points >= 60) {
    return 5;
  } else {
    return ((points - 36) / (60 - 36)) * 5 + 1;
  }
}

function calculatePersonalPoints(peerReviewAverage) {
  if (peerReviewAverage <= 1) {
    return 0;
  } else {
    return ((peerReviewAverage - 1) / (5 - 1)) * 20;
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
