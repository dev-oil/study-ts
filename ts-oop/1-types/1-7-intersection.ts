{
  // union 은 OR 느낌이라면 intersection은 AND 느낌의 개념임
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.score, person.work());
  }

  internWork({
    name: 'devoil',
    score: 100,
    employeeId: 980110,
    work: () => {},
  });
}
