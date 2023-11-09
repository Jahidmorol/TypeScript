{
  //

  // nullable type | unknown type | never type ;

  //  nullable type-----------> (null)
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  //   unknown type -------------->( unknown )

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    else {
        console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond("1002 metters")


   //never--------------->( never )

   const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Jahid se error hogaya");




  //
}
