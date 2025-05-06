
type GenericArray<T>=Array<T>;


const Garray:GenericArray<string>=['arman',"somrate"];

console.log(Garray);

const Gnumber:GenericArray<number>=[1,2,3];

console.log(Gnumber)

const users:GenericArray<{name:string,roll:number}>=[{name:'arman',roll:4}];


type GTuple<X,Y>=[X,Y];

const GTuples:GTuple<string,number>=['arman',2];

console.log(GTuples);
