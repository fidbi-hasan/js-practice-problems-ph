// admission grade calculator 

function calculateFinalScore(studentInfo) {
  if (typeof studentInfo !== 'object') return 'invalid input!';
  if (Array.isArray(studentInfo) === true) return 'invalid input!';

  const testScore = studentInfo.testScore;
  const schoolGrade = studentInfo.schoolGrade;
  const familyScore = (studentInfo.isFFamily === true) ? 20 : 0;

  const finalScore = testScore + schoolGrade + familyScore;

  let isEligible = false; 

  if (finalScore >= 80 && finalScore <= 100) {
    isEligible = true;
  }

  return isEligible;
}

const studentInfo = {
  name: 'fidbi',
  testScore: 45,
  schoolGrade: 15,
  isFFamily: true, 
}

const isAdmissionEligible = calculateFinalScore(studentInfo);

console.log(isAdmissionEligible);

