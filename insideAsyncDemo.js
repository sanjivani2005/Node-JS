function msg(){
    console.log(" Hello , At sanjivani")
    setTimeout(()=>{
        sayBye();
    },2000) //block for 2 sec 
    console.log("Nagpur")
}

function sayBye(){
    console.log("Bye , At sanjivani")
}

msg();