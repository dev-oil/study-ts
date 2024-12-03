// 예제 1
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const sonny = new FullTimeEmployee();
const conny = new PartTimeEmployee();

sonny.workFullTime();
conny.workPartTime();

const sonnyAfterPay = pay(sonny);
const connyAfterPay = pay(conny);

// sonnyAfterPay.workFullTime(); // 이제 사용 가능함

// 예제 2
const obj = {
  name: 'sonny',
  age: 32,
};

const obj2 = {
  animal: '🐶',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // sonny
console.log(getValue(obj, 'age')); // 32
console.log(getValue(obj2, 'animal')); // 🐶

// getValue 함수 사용시 없는 key 값 입력하면 error 떠줌..
