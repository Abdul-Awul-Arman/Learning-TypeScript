{
    //
    class Person{
        name:string;
        age:number;
        address:string;

        constructor(name:string,age:number,address:string){
            this.name=name;
            this.age=age;
            this.address=address;
        }
        
            getSleep(numOfhours:number){
        
                console.log(`${this.name} will sleep for ${numOfhours}`);
        
            }
    }
    //


    class Student extends Person {
        learning:string;


        constructor(learning:string,name:string,age:number,address:string
        ){
            super(name,age,address);
            this.learning=learning;
        }
    }

    const studen1=new Student("english","arman",22,"sylhet");

    console.log(studen1)
}