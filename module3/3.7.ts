{
  // static

  class Counter {
    static count: number = 0;

    static increment(): number {
      return (Counter.count += 1);
    }

    static decrement(): number {
      return (Counter.count -= 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  // const instance3 = new Counter();
  console.log(Counter.increment());

  //
}
