// Predict Avarage Waiting Time 

function waitingTime(waitingTimes, serialNumber) {
  if(Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
    return 'invalid input';
  }

  let totalWaitingTime = 0;
  const interviewCount = waitingTimes.length;

  for (const waitingTime of waitingTimes) {
    totalWaitingTime += waitingTime;
  }

  let averageWaitingTime = (totalWaitingTime / interviewCount);
  const interviewLeftCount = serialNumber - interviewCount - 1;

  const interviewTimeLeft = Math.round(averageWaitingTime * interviewLeftCount);

  return interviewTimeLeft;
}

const waitingTimes = [10, 5, 3, 4, 7];
const serialNumber = 10;

const interviewTimeLeft = waitingTime(waitingTimes, serialNumber);

console.log(`${interviewTimeLeft} minutes.`)

