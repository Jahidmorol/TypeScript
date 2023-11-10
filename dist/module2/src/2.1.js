"use strict";
{
    //
    //type assertion 
    let anything;
    anything = "everything is fare and lovely";
    anything = 4567;
    // (anything as string)
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value) * 1000;
            return convertValue;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(456);
    const result2 = kgToGm("9847");
    console.log({ result1, result2 });
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
