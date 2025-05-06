{
    //type alias

type Student={
    name:string;
    mobile:number;
    contact?:number;
}


const Student1:Student={
    name:'arman',
    mobile:+8801830014616,

}

type Add=(num:number,num2:number)=>number;

   const fun:Add=(num,num2)=>{
    return num+num2;
   }

}