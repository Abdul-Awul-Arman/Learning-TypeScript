
    //interface only for non-primitive 
    interface User1{
        name:string;
        roll:number;
    };

    type typeUser={
      name:string;
      roll:number;
    }



    const student1:User1={
        name:"arman",
        roll:1,
    };

    interface User2 extends typeUser{
        section:string;
    };


    const student2:User2={
        name:'somrate',
        roll:2,
        section:'a'
    }

    console.log(student2);
