// 타입스크립트란?
// 자바스크립트 + 타입

// 타입스크립트의 사용 이유
// 1. 정적 타입 검사
let count: number = 10;
// count = 'hello'; // 오류남

// 2. 코드 가독성 및 유지 보수성 향상
const calculateTotal = (price: number, quantity: number): number =>
  price * quantity;

// 3. 객체지향 프로그래밍 지원
interface Vehicle {
  move(): void;
}

class Car implements Vehicle {
  move() {
    console.log('This car is moving');
  }
}

class Plane implements Vehicle {
  move() {
    console.log('The plane is flying');
  }
}

// 기본
const greet = (name: string): string => `hello, ${name}`;

const message: string = greet('TypeScript');
console.log(message);
