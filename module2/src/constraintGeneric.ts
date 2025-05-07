{
    
type Student={
    name:string;
    age:number;
    number:number;
};

const fun=<X,Y extends keyof X>(param:X,param2:Y)=>{
    
    return param[param2];
};

const user1:Student={
    name:"arman",
    age:22,
    number:+8801830014616
    
}

const result=fun(user1,"name")

console.log(result);
}