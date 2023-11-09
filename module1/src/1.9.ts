{


type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
}

const student1: Student = {
    name: 'Jahid',
    age: 36,
    contactNo: '01873817685',
    gender: 'male',
    address: 'Bormi Bazar'
}

const student2: Student = {
    name: "Morol",
    age: 54,
    contactNo: "345836",
    gender: 'male',
    address: 'Barnal'
}


type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "person";
const isAdmin: IsAdmin = true;


type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => {
    return num1 + num2;
}

add(10, 10);














}