{
    const createPromise=()=>{
    return new Promise((resolve,reject)=>{

        const flag=true;

        if(flag){

           
                resolve("promise resolve");
           
        }
        else{
            reject("promise reject");
        }

    })
};


 const promise=createPromise();

 const result =promise.then((response)=>{
    return console.log(response) ;
 });

 console.log(result)

 console.log("this is sync")



}