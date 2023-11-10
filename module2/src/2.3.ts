{
  //

  // generic type ---------->

  type GenericArray<T> = Array<T>;
  // type GenericArray = Array<number>

  // const rollNumber: number[] = [1, 2, 3, 4, 5]
  // const rollNumber: Array<number> = [1, 2, 3, 4, 5]
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

  // const mentors: string[] = ["jahid", "jawid", "safwan"]
  // const mentors: Array<String> = ["jahid", "jawid", "safwan"]
  const mentors: GenericArray<String> = ["jahid", "jawid", "safwan"];

  // const booleanArray: boolean[] = [true, false, false];
  // const booleanArray: Array<boolean> = [true, false, false];
  const booleanArray: GenericArray<boolean> = [true, false, false];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    { name: "jahid", age: 12 },
    { name: "morol", age: 16 },
    { name: "Khan", age: 23 },
  ];

  const add = (x: number, y: number) => x + y;
  add(23, 56);

  // generic tuple ---
  // ~ const tupleArray: [number, string] = [121, "morol"]

  type GenericTuple<x, y> = [x, y];

  const man: GenericTuple<string, string> = ["jahid", "bow"];
  const manWithId: GenericTuple<number, { name: string; age: number }> = [
    567,
    {
      name: "jahid",
      age: 125,
    },
  ];

  //
}
