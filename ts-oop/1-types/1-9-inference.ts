{
  // 타입 추론
  /**
   * Type Inference
   *
   */

  let text = 'hello';
  // text = 1; // 이러면 에러 발생 ~
  // 타입이 살짝 뻔하면 생략해서 작성하는것도 ㄱㅊ

  function print(message = 'hello') {
    // default parameter로 타입 추론 형식으로 전달하는 법
    console.log(message);
  }

  print('hello'); // 'hello'
  // print(1);

  function add(x: number, y: number) {
    // 자연스럽게 타입 추론 : number
    return x + y;
  }

  const result = add(3, 4); // 갖다대면 :number
  console.log(result); // 7

  // 근데 요 타입추론! 정말 좋은걸까?
  // 실무에서는 현재 예시처럼 간단한 함수가 아니라,, 조금 더 복잡한 함수를 쓰게 된다.
  // 결과적으로는 타입 값을 전부 명시 해주는 것이 좋다!
}
