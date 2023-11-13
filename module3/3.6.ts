{
  // getter and setter Modifiers

    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number;
      // protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      //setter
      set deposit(amount: number) {
        this._balance = this._balance + amount;
      }

    //   public addDeposit(balance: number) {
    //     this._balance = this._balance + balance;
    //   }
  
    // getter 
    get balance() {
        return this._balance;
    }
    //   public getBalance(): number {
    //     return this._balance;
    //   }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    
    goribManusherAccount.deposit = 20
    
    const myBalance = goribManusherAccount.balance
    console.log(myBalance);
  
    //
  }
  