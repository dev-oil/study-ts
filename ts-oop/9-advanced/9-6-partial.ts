{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    // 이렇게 선언해놓으면 어떤 엉뚱한 키와 밸류를 전달할 수 없고, ToDo 타입에 있는 것들 중에 부분적인 아이들만 받을 수 있음
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
