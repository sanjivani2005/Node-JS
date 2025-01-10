function greet(fname){
    return new promiseObject((resolve,reject)=>{
        if(fname){
            resolve(`welcome ${fname}`)
        }
        else{
            reject('please enter your name, value not found')
        }
    });
}

async function userGreet(){
    try{
        const output=await greet("Sanjivani")
        console.log(`Greeting`);
        console.log(output);
    }
    catch(error){
        const outputError = error;
        console.log("Failed");
        console.log(``)
    }
}

greet('sanjivani');