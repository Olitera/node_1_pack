function calculateRPN(expression) {
  const stack = [];
  const items = expression.split(' ');

  items.forEach((item) => {
    if (!isNaN(item)) {
      stack.push(+item);
    } else {
      const second = stack.pop();
      const first = stack.pop();

      switch (item) {
        case '+':
          stack.push(first + second);
          break;
        case '-':
          stack.push(first - second);
          break;
        case '*':
          stack.push(first * second);
          break;
        case '/':
          stack.push(first / second);
          break;
        default:
          throw new Error(`Invalid operator: ${item}`);
      }
    }
  });

  if (stack.length !== 1) {
    throw new Error('Invalid RPN expression');
  }

  return stack.pop();
}

module.exports = calculateRPN;
