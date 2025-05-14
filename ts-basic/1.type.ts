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

// 튜플 : 요소의 타입을 고정
const tuple: [string, number, boolean] = ['lee', 40, true];

// 튜플을 이용한 리턴값
const getPerson = (): [string, number] => ['park', 30];
console.log(getPerson());
