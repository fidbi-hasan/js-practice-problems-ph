// calculate tax

function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return 'invalid input!';
  } 

  const savings = income - expenses;

  const taxAmount = savings * (20 / 100); 

  return taxAmount;
}

const myTax = parseFloat(calculateTax(5000, 1500).toFixed(2));

console.log(myTax);

