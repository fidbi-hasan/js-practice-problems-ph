// generate notification text from email

function sendNotification(email) {
  if (typeof email !== 'string') return 'input must be a string!';
  if (!email.includes('@')) return 'invalid email!';

  const seperateElements = email.split('@');

  const userName = seperateElements[0];
  const domainName = seperateElements[1];

  const message = `${userName} sent you an email from ${domainName}`;

  return message;
}

const email = '22-46190-1@student.aiub.edu';

const notification = sendNotification(email);

console.log(notification);


