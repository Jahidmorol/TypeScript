{
  // abstraction  : 1. interface 2. abstract

  // 1. interface ------------------>
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("engine started");
    }
    stopEngine(): void {
      console.log("engine stopped");
    }
    move(): void {
      console.log("engine moving");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // 2. abstract ------------------>

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("test started");
    }
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("engine started");
    }
    stopEngine(): void {
      console.log("engine stopped");
    }
    move(): void {
      console.log("engine moved");
    }
  }

  const hondaCar = new Car2();
  hondaCar.startEngine();

  //
}
