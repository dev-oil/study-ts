// Type Alias
type PositionType = {
  x: number;
  y: number;
};

// Interface
interface PositionInterface {
  x: number;
  y: number;
}

// 둘 다 가능한 경우
// object ⭐️
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class ⭐️
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// only interface can be merged
interface PositionInterface {
  // 추가로 더 지정해 줄 수 있음
  z: number;
}

// 안됨
// type PositionType {
// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';

// 개념
// Interface와 Type alias
// 결론 : 규격을 맞출때는 Interface / 아니라면 Type alias

// Interface
// Interface는 어떤것에 대한 규격사항 (like api)
// 오브젝트와 오브젝트 간의 의사소통을 할 때 정해진 인터페이스를 토대로 서로간의 상호작용을 할 수 있게 도와준다.

// Type
// 타입은 우리가 어떠한 데이터를 담을 때 어떠한 데이터를 담을 수 있을지 이 데이터의 모습 즉 타입을 결정하는 것이다.
