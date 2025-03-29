{
  /**
   * Enum
   * 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days { // 따로 값을 저장하지 않으면 자동으로 0 부터 1씩 카운트 된 값 적용
    Monday = 1, // 0 // 값 지정하면 하나씩 카운트
    // Monday = 'monday', // 문자열은 다른 값 하나하나 다 지정해줘야함
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Monday);

  let day: Days = Days.Saturday;
  day = Days.Tuesday;

  console.log(day);

  // UNION 으로 쓴다면?
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  let dayOfweek: DaysOfWeek = 'Monday';
  // dayOfweek = 'devoil'; 이렇게 엉뚱한 문자열을 할당할 수 없음!

  // enum vs union
  // union 이 더 이기는 이유?
  // union 타입은 런타임 비용이 없고, 컴파일 타임에만 동작하여 효율적입니다.
  // 타입 안전성이 더 높고, 잘못된 값을 허용하지 않아 안정적입니다.
  // 가독성이 좋고, 직관적으로 사용하기 쉽습니다.
  // Tree Shaking이 가능하여 번들 크기를 줄일 수 있습니다.

  // 그럼에도 불구하고 enum 을 사용해야하는 경우?
  // 값과 이름을 매핑해야 할 때 (예: 양방향 매핑이 필요한 경우).
  // 숫자 열거형이 필요한 경우 (예: 특정 값 증가 패턴이 있는 경우).
  // 데이터와 값이 강하게 연결되어 있는 상황에서 사용합니다.
}
