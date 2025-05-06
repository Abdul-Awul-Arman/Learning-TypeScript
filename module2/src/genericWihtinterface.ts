type Developer<T,X=null>={
    name:string;
    age:number;
    skills:T;
    language?:X;
}

interface skills{
        react:boolean,
        node:boolean,
    };

    interface language{
        english:boolean;
        bengali:boolean;
    }

const Developer1:Developer<skills>={

    name:"name",
    age:22,
    skills:{
        react:true,
        node:false,
    }

}

interface skills2{
    php:boolean;
    leravel:boolean;
    vusJs:boolean;
}

const Developer2:Developer<skills2,language>={
    name:'nur',
    age:22,
    skills:{
        php:true,
        vusJs:true,
        leravel:true,
    }
}