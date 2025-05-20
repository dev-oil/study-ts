{
  // 컨디셔널 타입은 어떤 타입이 이런 타입이라면 이 타입을 써야지. 라고 조건적으로 결정할 수 있는 타입이다.

  type Check<T> = T extends string ? boolean : number;
  // 이 체크타입은 기존의 주어진 타입이 문자열을 상속한다면? 불리언 타입. 아니면? 넘버
  type Type = Check<string>; // boolean (조건이 맞으면 어떤 타입을 선택한다... 요런것도 가능)

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

  type T0 = TypeName<string>; // string
  type T1 = TypeName<'a'>; // string
  type T2 = TypeName<() => void>; // function
}
