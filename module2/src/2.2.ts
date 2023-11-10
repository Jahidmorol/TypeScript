{
  //

  //interface------------------>

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

//   extend with type 
  type USerWithRole1 = User1 & { role: string };

  const user1: USerWithRole1 = {
    name: 'user',
    age: 30,
    role: "guest"
  } 


//   extent with interface 
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const userWithRole2: UserWithRole2 = {
    name: 'user',
    age: 30,
    role: "guest"
  } 

   // js --> object , array-> object function -> object

//    in Array 
   type Roll1 = number[];

   interface Roll2 {
    [index: number] : number;
   }

   const rollNumber1: Roll2 = [1,2,3,4];


//    in function 
   type Add1 = (value1: number, value2: number) => number;

   interface Add2 {
    (num1: number, num2: number) : number;
   }


   const add: Add1 = (value1, value2) => value1 + value2;

   
  //
}
