{
  // 해당 함수의 문제점 (재사용성)
  // null 외에 다른 타입을 체크하고 싶다면? checkNotString / checkNot어쩌고 하나 하나 만들어 줘야함
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // 해당 함수의 문제점 (타입 안정성)
  // 타입이 보장되지 않는다
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123); // 숫자가 null 이 아니라면 any가 return

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); // number 타입이 됨
  const boal: boolean = checkNotNull(true); // true 타입
}
