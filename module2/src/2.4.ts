{
  //

  // interFace - generic

  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Watch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<Watch, null> = {
    name: "Jahid",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface Bike {
    model: string;
    engineCapacity: string;
  }

  const RichDeveloper: Developer<Watch, Bike> = {
    name: "Morol",
    computer: {
      brand: "Hp",
      model: "X-5UR",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple",
      model: "k6",
      display: "OLED",
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
