{
  /**
   * Type Assertions 💩
   */

  // 항상 문자열을 리턴하는 함수
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();

  // result.length; // 항상 문자열을 리턴하는건 알지만 내장 api 사용이 안됨..
  console.log((result as string).length); // 5
  console.log((<string>result).length); // 5

  // 나는 이 함수가 항상 문자열을 리턴하는걸 알아요!!! 하고 타입 캐스팅이 가능함
  // 근데 주의할 점
  // 만약 return 숫자를 하게되면, undefined 가 나와버림 (오류가 안뜸)

  // assertion은 정말 장담할 수 있을때만

  // 무서운 예제
  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(2)); // 😱 코딩할 때 문제가 안뜸.. 헉 근데 실행하면 오류 ㅜ

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // numbers.push(2); // 😱
  numbers!.push(2); // !. 여긴 값이 있다. 완전 보장.
}
