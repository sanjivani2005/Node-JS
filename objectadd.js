//object addition
//num1,num2,num3,num4
//function add
//function display

let addition={
     num1:10,  num2:20,
     num3:30,
    num4:40, //attribute
    result:0,
    add :function(){
        this.result=this.num1+this.num2+this.num3+this.num4
    },
    display: function(){
        return this.result;
    }

}
addition.add();
console.log(addition.display());