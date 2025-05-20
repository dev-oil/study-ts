{
  // map 타입이란? 기존에 있는 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것을 말함
  // 기존의 타입에서 다른 타입으로 성질 변환

  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // map 메서드
  // [1, 2].map((item) => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'gitadd';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'devoil',
  };

  // video.author = // 이렇게 하면 에러

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  // Proxify 라는 타입은 전달되는 어떤 오브젝트를 빙글 빙글 돌면서 타입을 이렇게 프록시라는 타입으로 한 단계 감싸는 역할을 해줌
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
