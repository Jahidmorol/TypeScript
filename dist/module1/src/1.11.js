"use strict";
var _a;
{
    //
    // ternary operator | optional chaining | nullish coalescing operator ;
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("Not adult");
    }
    const isAdult = age >= 18 ? "adult~" : "Not adult~";
    console.log({ isAdult });
    // nullish coalescing operator------------- ( ?? ){null | undefined}
    // null / undefined ---> decision making
    //const isAuthenticated = null;
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Jahid",
        address: {
            city: "dhaka",
            road: 11,
            presentAddress: "dhaka",
        }
    };
    const permanentAddress = (_a = user.address.permanentAddress) !== null && _a !== void 0 ? _a : "No permanent address";
    console.log({ permanentAddress });
    //
}
