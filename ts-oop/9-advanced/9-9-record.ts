type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

// 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때 유용하게 쓸 수 있음
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

type Product = 'cat' | 'dog';
// 대문자 ㅋㅋ 유틸리티
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog' 가능
