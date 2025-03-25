{
  /**
   * Javascript 타입
   * Primitive(원시 타입): number, string, boolean, bigint(큰숫자), symbol, null, undefined
   * Object(객체 타입): function, array, object ....
   */

  // 1. number
  const num: number = -10;

  // 2. string
  const str: string = '안녕';

  // 3. boolean
  const boal: boolean = false;

  // 4. undefined
  // 비었는지 안비었는지 아직 결정되지 않은 사항임.
  let name: undefined; // 💩

  let age: number | undefined; // 이런식으로 또는 을 지정해 줄 수 있음
  age = undefined;
  age = 1;

  // 5. null
  // 널이라는 값은 비었다라고 결정되어있음.
  // 개발자가 명시해주는 비어져있다는 값.
  let person: null; // 💩
  let person2: string | null; // 이런식으로 또는 을 지정해 줄 수 있음

  // 또는 예제
  // 찾으면 number를 반환하고, 못찾는다면 undefined 를 반환하라
  function find(): number | undefined {
    return 1;
  }

  // 6. unknown 💩 - 어떤 종류의 데이터가 담길 지 알수 없다는 뜻
  // 이거 뭐 타입도 아닌데 왜있냐..?
  // 자바스크립트와 연동해서 쓸 수 있게 하기 때문에...
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // 7. any 💩
  let anything: any = 0;
  anything = 'hello';

  // 8. void
  // 함수에서 아무런 값도 리턴하지 않을 때
  function print() {
    console.log('hello');
  }

  let unusable: void = undefined; // 💩 void로 선언하면 이렇게 undefined 밖에 할당이 안됨

  // 9. never
  // 함수에서 절대 리턴되지 않는 경우에 그것을 명시하기 위해서 씀
  function throwError(message: string): never {
    // message -> server (log) 에러 메시지를 서버로 보내고
    throw new Error(message);
    while (true) {}
  } // 에러를 던지니까 결국 앱이 죽는거기 때문에, 이 함수는 절대 리턴하는 값이 X..
  // 또는 무한 루프..
  let neverEnding: never; // 💩

  // 10. object 💩 이것도 추상적이군!
  // 원시 타입을 제외한 모든 object 타입을 할당할 수 있음
  let obj: object = [1, 4];

  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'dev-oil' });
  acceptSomeObject({ animal: 'dog' });
}
