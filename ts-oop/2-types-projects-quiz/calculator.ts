/**
 * Let's make a calculator 🧮
 */

// 기본 version
const calculateDefault = (
  command: string,
  num1: number,
  num2: number
): number | null => {
  switch (command) {
    case 'add':
      return num1 + num2;

    case 'subtract':
      return num1 - num2;

    case 'multiply':
      return num1 * num2;

    case 'divide':
      return num1 / num2;

    case 'remainder':
      return num1 % num2;

    default:
      return null;
  }
};

// Union 타입 이용해보기!
type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

const calculate = (command: Command, num1: number, num2: number): number => {
  switch (command) {
    case 'add':
      return num1 + num2;

    case 'subtract':
      return num1 - num2;

    case 'multiply':
      return num1 * num2;

    case 'divide':
      return num1 / num2;

    case 'remainder':
      return num1 % num2;
    default:
      throw new Error('unknown command'); // default 에 에러를 넣어주면 된다.. 새로 배웠음!
  }
};

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
