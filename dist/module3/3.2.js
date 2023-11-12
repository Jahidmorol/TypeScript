"use strict";
{
    //
    // opp inheritance------>
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student = new Student("Jahid", 22, "Dhaka");
    //   console.log(student);
    student.getSleep(22);
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }
    const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
    teacher.takeClass(5);
    //
}
