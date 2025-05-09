{
    class BankAccount{
       public readonly id:number;
        name:string;
        private balance:number;

        constructor(number:number,name:string,balance:number){
            this.id=number;
            this.balance=balance;
            this.name=name;
        }

        doDeposit(money:number){
            this.balance=this.balance+money;
            console.log(this.balance);
        }
    }

   const goriberAccount=new BankAccount(222,"gorider account",20);
   
   goriberAccount.doDeposit(50)
  

   
   
}