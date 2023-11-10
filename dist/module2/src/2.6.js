"use strict";
{
    //
    const addCourseToStudent = (student) => {
        const course = "web next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 234,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 432,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    const student3 = addCourseToStudent({
        id: 44,
        name: "Mr. Z",
        email: "z@gmail.com",
        emni: "emni",
    });
    //
}
