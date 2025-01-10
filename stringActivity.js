/*s1="sanjivani"
s2="shende"
if(s1==s2){
    console.log(" Strings are equal");
}else{
    console.log("string is not equal ")
}*/

let s1="hello ";
let s2 ='Hello';
    const promiseObject=new Promise((resolve , reject)=>{
        if(s1==s2){
            resolve(`given strings are equal`);
        }else{
            reject(`strings are not equal `)
        }
    });

promiseObject.then((result)=>{
console.log(result)
}).catch((error)=>{
    console.log(error);
}
)