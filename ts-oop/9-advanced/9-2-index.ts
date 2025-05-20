{
  // index type
  // 다른 타입에 있는 키에 접근해서 그 키의 value의 타입을 다시 선언 할 수 있는 타입
  const obj = {
    name: 'dev-oil',
  };
  console.log(obj.name); // dev-oil
  console.log(obj['name']); // dev-oil

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string -> name이라는 Animal 키의 타입을 Name 이라는 타입에 선언

  type Gender = Animal['gender']; // 'male' | 'female'
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'shoooooot',
    gender: 'female',
  };
}
