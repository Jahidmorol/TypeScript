"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };
    const car = {
        model: "Toyota 100",
        year: 2003,
    };
    //   user["age"]  --> (26)
    const result1 = getPropertyValue(car, "year");
    //   console.log(result1);
    //
}
