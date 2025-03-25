{
  /**
   * Type Aliases
   *
   */

  type Text = string;
  const name: Text = 'dev-oil';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'dog',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let oilName: Name;
  oilName = 'name'; // 'name' 만 할당할 수 있음

  type JSON = 'json';
  const json: JSON = 'json'; // 'json' 만 할당할 수 있음

  type Boal = true;
  const isCat: Boal = true; // 'true' 만 할당할 수 있음
}
