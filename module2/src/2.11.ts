{
  //

  //-------------> utility types

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //   omit
  type Contacts = Omit<Person, "name" | "age">;

  // Required
  type RequiredPerson = Required<Person>;

  // Partial
  type PartialPerson = Partial<Person>;

  // Readonly
  type ReadOnlyPerson = Readonly<Person>;

  const person1: ReadOnlyPerson = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  //   person1.name = "Mr. YZ";

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>;

  type EmptyObj = Record<string, unknown>;

  const obj1: EmptyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6,
  };

  //
}
