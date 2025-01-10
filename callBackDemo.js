function sayHello(fname, lname){
    console.log(`Hello, ${fname},${lname}`);
}

function goodBye(){
    console.log(" Good bye ")
}

function msg(fname,lname ,callBack1,callBack2){
    console.log(" wait for message ");
    setTimeout(()=>{
        callBack1(fname,lname);
    },2000
    );
    setTimeout(()=>{
       callBack2();
    },3000
    )
}

msg("sanjivani ","shende",sayHello )
//msg("shyam ", null )