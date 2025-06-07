// 일반 타입 지정
// 기본 데이터 타입 명시
let myName: string = 'happy';
myName = 'dev-oil';
let age: number = 30;
let isAvail: boolean = true;

let value: string | null = null; // 유니언 타입
value = 'toto';
console.log(value);

value = null;
console.log(value);

// 배열 타입 지정
const numbers: number[] = [1, 2, 3, 4, 5];
const firstElement = <T>(arr: T[]): T | undefined => arr[0];

// 함수 데이터 타입
const add = (x: number, y: number): number => x + y;
console.log(add(1, 2)); // 3

// 함수에서 매개변수를 생략할 수 없는 경우
const sayHello = (name: string): string => `Hello, ${name}`;
console.log(sayHello('dev-oil'));

// 선택적 매개변수
const sayHello2 = (name: string, lang?: string): string =>
  lang ? `Hello, ${name} & ${lang}` : `Hello, ${name}`; // option
console.log(sayHello2('dev-oil', 'TS'));

const multiply = (x: number = 1, y: number = 1): number => x * y;
console.log(multiply(5)); // 5
console.log(multiply(5, 3)); // 15

// 나머지 매개변수
// ... 스프레드 연산자
const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumAll(1, 2, 3, 4, 5));

// 함수 자체를 변수에 할당할 때 함수의 타입 정의
let myFunc: (a: number, b: number) => number = (x: number, y: number): number =>
  x + y;

console.log(myFunc(2, 5));

// 객체 타입
type Student = {
  name: string;
  age: number;
  course: string;
};

const student: Student = {
  name: 'kim',
  age: 28,
  course: 'TypeScript',
};

type Author = {
  name: string;
  books: { title: string; year: number }[]; // 객체 배열
};

// 중첩된 객체 타입
const author: Author = {
  name: 'dev-oil',
  books: [
    {
      title: '타입스크립트',
      year: 2025,
    },
    {
      title: '리액트',
      year: 2024,
    },
  ],
};

console.log(author.books[0].title); // 타입스크립트

// 선택적 속성
type User = {
  name: string;
  age?: number;
};

const user: User = {
  name: 'oil',
};

console.log(user.age); // undefined
user.age = 30;
console.log(user);

// 읽기 전용 속성
type Car = {
  readonly brand: string; // 이 속성은 못바꿈
  year: number;
};

const car: Car = {
  brand: 'kia',
  year: 2025,
};

// car.brand = '대우'; // 컴파일 실행 시 오류 !

console.log(car);

// 객체의 타입과 함수 결합
type Person = {
  name: string;
  greet(): string;
};

const person = {
  name: 'oil',
  greet() {
    return `안녕하세요 ${this.name}`;
  },
};

console.log(person.greet());

// 튜플 : 요소의 타입을 고정
const tuple: [string, number, boolean] = ['lee', 40, true];

// 튜플을 이용한 리턴값
const getPerson = (): [string, number] => ['park', 30];
console.log(getPerson());

// 인터페이스 : 본질 : 타입 (클래스도 타입)
interface Book {
  title: string;
  author: string;
  year: number;
}

const myBook: Book = {
  title: 'functional programming',
  author: 'devdevdev',
  year: 2025,
};

console.log(myBook.title);

// 선택적 속성
type NewUser = {
  readonly username: string;
  email?: string;
};

const newUser: NewUser = {
  username: 'ooo',
};

console.log(newUser.username); // ooo
newUser.email = 'ooo@gmail.com';
// newUser.username = 'good';
console.log(newUser);

// 인터페이스로 함수 타입 정의
interface MyCal {
  plus(a: number, b: number): number;
  minus(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

// type MyCal = {
//   plus: (a: number, b: number) => number;
//   minus: (a: number, b: number) => number;
//   multiply: (a: number, b: number) => number;
// };

const myCal: MyCal = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.clear();

// 인터페이스끼리 상속 + class
interface People {
  name: string;
  age: number;
}

interface Emp extends People {
  empId: number;
}

// 기본 객체 사용에서
// const emp: Emp = {
//   name: 'jennie', // who ~ wanna rock with jennie ~~
//   age: 30,
//   empId: 12345,
// };

// console.log(emp.name);

// class에서
class CompanyEmp implements Emp {
  // 인터페이스는 새로운 구현
  name: string;
  age: number;
  empId: number;

  constructor(name: string, age: number, empId: number) {
    this.name = name;
    this.age = age;
    this.empId = empId;
  }

  introduce() {
    return `저는 ${this.name}, 사번은 ${this.empId}입니다.`;
  }
}

const emp1 = new CompanyEmp('jennie', 30, 12345);
const emp2 = new CompanyEmp('jennie', 30, 12345);
const emp3 = new CompanyEmp('jennie', 30, 12345);

console.log(emp1.name);
console.log(emp1.introduce());

// 그럼 기본 객체에서 사용하는거랑 클래스랑 어떤 차이임?
// 객체 리터럴로 생성 시 하나의 인스턴스만 생성 가능
// 클래스는 new 생성자로 여러개를 만들어 줄 수 있음 (하나하나 지정해 줄 필요 없이)

// 열거형과 Union 타입
// 열거형
// 특정 값의 집합을 나타내고 싶을 때 (ex. 동 서 남 북 / 주문상태, 처리상태 / 유저 역할 구분)
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// console.log(Direction.Up); // 0
// console.log(Direction[0]); // Up

class Character {
  x: number = 0;
  y: number = 0;

  getPosition() {
    return { x: this.x, y: this.y };
  }

  move(direction: Direction) {
    switch (direction) {
      case Direction.Up:
        this.y--;
        break;
      case Direction.Down:
        this.y++;
        break;
      case Direction.Left:
        this.x--;
        break;
      case Direction.Right:
        this.x++;
        break;
    }
    console.log(`Moved ${Direction[direction]}`); // 그냥 direction 이면 0 나옴
  }
}
const character = new Character();

character.move(Direction.Down);
console.log(character.getPosition());
character.move(Direction.Right);
console.log(character.getPosition());

console.log(Direction.Up);

// any 타입
// 아무거나 타입 (타입 체크 안하겠다) 최대한 쓰지 않기로 ~~
// let anyVal: any = 100;
// anyVal = '100';

// console.log(anyVal);

// 유니온 타입
// 두가지 이상의 타입을 지정할 때
// 공용체(union)
type Union = number | string;

let uni: Union = 100;
uni = 'happy';
// uni = true;

function printId(id: string | number): void {
  console.log(`your id is : ${typeof id === 'string' ? id.toUpperCase() : id}`);
}

console.log(printId(123));
console.log(printId('abc'));

console.clear();

const getLength = (value: string | string[]): number => value.length;

console.log(getLength('hello'));
console.log(getLength(['d', 'w', 'a']));

// 유니온 타입과 배열
let values: (number | string)[] = [1, 2, '💭', 4, 5, '2'];

values.push(2);
values.push('D');
// values.push(true); 안되어.요

// 객체 속성에 유니온 타입 사용
type Human = {
  name: string;
  age: number | string;
};

const human1: Human = {
  name: 'yoyo',
  age: 30,
};

const human2: Human = {
  name: 'hoho',
  age: '비밀',
};

console.log(human1);
console.log(human2);

// 타입 재정의
// #define, #typedef

// 타입 별칭
// type 이름 = 타입 or 타입들의 조합

console.clear();

// 객체 타입 별칭
type ID = string | number;

let userId: ID;

userId = '1234';
userId = 12;

type UserType = {
  name: string;
  age: number;
  email?: string;
};

const user1: UserType = {
  name: 'james',
  age: 19,
  email: 'james@mail.com',
};

const user2: UserType = {
  name: 'gou',
  age: 21,
};

console.log(user1);
console.log(user2);

// 함수 타입 별칭
type Operation = (x: number, y: number) => number;

const plus: Operation = (x, y) => x + y;
const minus: Operation = (x, y) => x - y;

console.log(plus(3, 2));
console.log(minus(3, 2));

// 타입 별칭과 인터페이스 결합
type MyLocation = {
  country: string;
  city: string;
  zipCode: string;
};

interface Company {
  name: string;
  employees: number;
  location: MyLocation;
}

const company: Company = {
  name: '코스타',
  employees: 15,
  location: {
    country: '대한민국',
    city: '서울',
    zipCode: '12345',
  },
};

console.log(company);

// 리터럴 타입 : 특정값만 가질 수 있도록 제한된 타입
// 문자열 리터럴, 숫자 리터럴, 불리언 리터럴

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const sendRequest = (method: RequestMethod): void => {
  console.log(`Sending a ${method} request.`);
};

console.log(sendRequest('GET'));
// console.log(sendRequest('Fetch'));

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

const rollDice = (): DiceRoll => {
  const result = Math.floor(Math.random() * 6 + 1) as DiceRoll;

  return result;
};

console.log(rollDice());

console.clear();

// 불리언 리터럴 타입
type isActive = true | false;

const toggle = (active: isActive) => {
  if (active) {
    console.log('불켜짐');
  } else {
    console.log('불꺼짐');
  }
};

toggle(true);

// 리터럴 타입을 활용한 함수 오버로딩
function getStatus(code: 200): 'Success';
function getStatus(code: 404): 'Not Found';
function getStatus(code: 500): 'Server Error';

function getStatus(code: number): string {
  switch (code) {
    case 200:
      return 'Success';
    case 404:
      return 'Not Found';
    case 500:
      return 'Server Error';
    default:
      return 'Unknown Status';
  }
}

console.log(getStatus(200));

// 타입 가드! (타입의 예외처리)
type PrintType = string | number;

const printValue = (value: PrintType) => {
  if (typeof value === 'string') {
    console.log(`string ${value}`);
  } else {
    console.log(`number ${value}`);
  }
};

printValue('타입스크립트영');
printValue(100);

// instanceof
class Dog {
  bark() {
    console.log('멍멍 주인님');
  }
}

class Cat {
  meow() {
    console.log('이봐, 김집사.');
  }
}

const makeSound = (pet: Dog | Cat) => {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
};

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);
