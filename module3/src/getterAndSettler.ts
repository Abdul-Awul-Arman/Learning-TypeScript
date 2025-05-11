{
    class BankAccount{
       public readonly id:number;
        name:string;
        private _balance:number;

        constructor(number:number,name:string,_balance:number){
            this.id=number;
            this._balance=_balance;
            this.name=name;
        }
    //methods are by default public
        // public doDeposit(money:number){
        //     this._balance=this._balance+money;
        //     console.log(this._balance);
        // }

        get balance(){
            return this._balance;
        }

        set setBalance(taka:number){
            this._balance=this._balance+taka;
        }
    }

   const goriberAccount=new BankAccount(222,"gorider account",20);
   

  
   console.log(goriberAccount.balance)
   goriberAccount.setBalance=50
   console.log(goriberAccount.balance)
   
   
}