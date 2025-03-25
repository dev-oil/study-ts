{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scores: number[] = [1, 3, 4]; // const score: Array<number> = [2, 3, 4];
  // object의 불변성을 유지하는 방법 readonly
  function printArray(fruits: readonly string[]) {}

  // Tuple - 서로 다른 데이터를 담을 수 잇슴
  // 하지만 사용을 권장하진 않는다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name 찍어보지 않는 이상 모름..
  student[1]; // 123 찍어보지 않는 이상 모름222....

  // 명확하게 다시 할당하기
  const [name, age] = student;
}
