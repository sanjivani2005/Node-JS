//synchronous code
/*console.log("Hello 1");
setTimeout(()=>
{
    console.log(" Hello 1.5");
},10);
console.log("Hello 2");
console.log("Hello 3");
console.log("Hello 4"); */

function sayHello(){
    console.log("Hello Sanjivani ");
}

function sayBye(){
    console.log(" Bye Sanjivani ");
}
setTimeout(()=>{
    sayBye();
})
sayHello();