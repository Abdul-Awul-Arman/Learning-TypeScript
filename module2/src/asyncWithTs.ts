{
    const createPromise=():Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{

        const flag=true;

        if(flag){
           return resolve("promise resolve");
        }else{
           return reject("promise reject");
        }

    })
};


async function result ():Promise<string>{
    const res= await createPromise();

    console.log(res)

    return res;
}

result()
}