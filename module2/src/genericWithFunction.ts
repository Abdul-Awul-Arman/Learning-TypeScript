

const genericFunction=<T>(param:T):T[]=>{
    return [param];
};

interface Users{
    name:string;
    roll:number;
    age:number;
    class:string;
}
const result=genericFunction<string>("Bangladesh");
const resultObj=genericFunction<Users>({
    name:'arman',
    roll:1,
    age:22,
    class:"arabic"
});

const genericTuple=<X,Y>(param1:X,param2:Y):[X,Y]=>{
    return [param1,param2];
};


console.log(genericTuple<string,number>("BD",2));


