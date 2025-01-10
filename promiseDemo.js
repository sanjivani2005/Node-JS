//using promise object
let fname;
let lname ='Sanjivani';
    const promiseObject=new Promise((resolve , reject)=>{
        if(fname && lname){
            resolve(`welcome ${fname} ${lname}`);
        }else if(fname==undefined){
            reject(`value is not found for the first name`)
        }else if(lname==undefined){
            reject(`value is not found for the last name`)
        }
        else{
            reject(`value for fname not found `);
        }
    });

promiseObject.then((result)=>{
console.log(result)
}).catch((error)=>{
    console.log("error");
}
)


