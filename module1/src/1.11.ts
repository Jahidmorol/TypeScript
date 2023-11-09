{
  //

  // ternary operator | optional chaining | nullish coalescing operator ;

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult~" : "Not adult~";
  console.log({ isAdult });

  // nullish coalescing operator------------- ( ?? ){null | undefined}
  // null / undefined ---> decision making

  //const isAuthenticated = null;
  const isAuthenticated = '';

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
        city: string;
        road: number;
        presentAddress: string;
        permanentAddress?: string;
    };
  }

  const user: User = {
    name: "Jahid",
    address: {
        city: "dhaka",
        road: 11,
        presentAddress: "dhaka",
    }
  }

  const permanentAddress = user.address.permanentAddress ?? "No permanent address";
  console.log({permanentAddress});
  



//
}
