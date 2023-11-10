"use strict";
{
    //
    // function with generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObject = createArrayWithGeneric({
        id: 222,
        name: "Mr. Pashan",
    });
    const createArrayWithTuple = (parma1, parma2) => {
        return [parma1, parma2];
    };
    const res10 = createArrayWithTuple(12, "Bangladesh");
    const res11 = createArrayWithTuple(12, {
        name: "Asia",
    });
    const addCourseToStudent = (student) => {
        const course = "web next level";
        return Object.assign(Object.assign({}, student), { course });
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
