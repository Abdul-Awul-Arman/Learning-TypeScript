{
    //
    type NormalUser={
    name:string;
    
};

type AdminUser={
    name:string;
    role:"admin";
};


function getName(user: NormalUser | AdminUser){
    if('role' in user){
        console.log(`My name is ${user.name} my role is ${user.role}`);
    }else{
        console.log(`My name is ${user.name}`);
    }
};


const normaluser:NormalUser={
    name:"arman",
};

const adminuser:AdminUser={
    name:"I am admin",
    role:"admin",

}

getName(normaluser);
    //
}