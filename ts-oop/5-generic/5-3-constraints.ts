// 예제 1
interface Employee {
  pay(): void;
}

// FullTimeEmployee < Employee
// const x: FullTimeEmployee = {}

function welcomeFulltimeEmployee(employee: Employee): FullTimeEmployee {
  // employee.workFullTime();
  console.log(`Welcome to the full time employee!!`);
  return new FullTimeEmployee();
}
// welcomeFulltimeEmployee :: Employee -> FullTimeEmployee

// covariance, invariance
const f: (employee: FullTimeEmployee) => Employee = welcomeFulltimeEmployee;

// 입구를 좁게 만드는거 ㅇㅋ 넓히면 안돼
// 출구를 넓게 만드는거 ㅇㅋ 좁히면 안돼

// 1. Covariance (공변성)
// 출구(반환값)에 적용됨
// 반환 타입이 더 구체적(하위 타입)이어도 괜찮음

// 2. Contravariance (반공변성)
// 입구(매개변수)에 적용됨
// 매개변수 타입이 더 넓은(상위 타입)이어도 괜찮음

// 3. Invariance (불변성)
// 정확히 일치해야 함
// 서로 치환 불가

// ⁉️ 하여튼 결론은
// 입구는 넓게 받아야 안전하고, 출구는 좁게 내보내야 안전하다. (입구는 넓게, 출구는 좁게 → 타입 안전)

// function createEmployee(): Employee {
//   return new Employee()
// }

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

// X도민
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
