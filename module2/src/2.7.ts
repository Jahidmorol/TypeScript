{
    //

    //generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle


    const getPropertyValue = <T, X extends keyof T>(obj: T, key: X) => {
        return obj[key];
    }

    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
      }

    const car = {
        model: "Toyota 100",
        year: 2003,
      };

    //   user["age"]  --> (26)

      const result1 = getPropertyValue(car, "year");

    //   console.log(result1);
      











    //
}