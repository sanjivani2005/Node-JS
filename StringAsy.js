//string equal or not using async 
function compareString(s1,s2){
    return new Promise((resolve,reject)=>{
        if(s1==s2){
            resolve(`strings are equal`)
        }
        else{
            reject('strings are not equal')
        }
    });
}

async function result(){
    try{
        const output=await compareString("Sanjivani","Sanjivani")
        console.log(`Greeting`);
        console.log(output);
    }
    catch(error){
        const outputError = error;
        console.log("Failed");
        console.log(outputError)
    }
}

result();
