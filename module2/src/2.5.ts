{
  //
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };
  const resGenericObject = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  const createArrayWithTuple = <T, Q>(parma1: T, parma2: Q): [T, Q] => {
    return [parma1, parma2];
  };

  const res10 = createArrayWithTuple<number, string>(12, "Bangladesh");
  const res11 = createArrayWithTuple<number, { name: string }>(12, {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T): object => {
    const course = "web next level";
    return {
      ...student,
      course,
    };
  };


//   interface Student {
//     name: string;
//     email: string;
//     devType?: string;
//     hasWatch?: string;
//   }

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
