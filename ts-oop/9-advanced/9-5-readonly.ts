{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 이렇게 작성해주면 됨.
    // todo.title = 'hoho';
  }
}
