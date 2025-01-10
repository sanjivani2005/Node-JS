function sayHello(fname,lname){
    return new Promise((res,rej)=>{
        if(fname){
            //res(`welcome ${fname}`)
           // res(`welcome ${fname}`)
            res(`welcome ${fname} ${lname}`)
        }else{
            rej(`value not found`)
        }
    });
}
sayHello("Sanjivani","shende").then((output)=>{
    console.log(output);
}).catch((error)=>{
    console.log(error)
}
);