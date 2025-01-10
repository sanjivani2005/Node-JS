let cities =['Nagpur','Delhi','Jaipur','Banglore']

for(city of cities){
    console.log(city)
}

//destructure of a array

let [city1,city2,city3,city4,city5]=cities

console.log(cities)
console.log(city1)
console.log(city4)

let numbers =[1,2,3,4];
console.log(numbers[1,2,3,4])


//spred operator
let numbers1=[11,22,33,44]
let numbers2=[10 , 20,30,40]
let numbers3=[...numbers1,...numbers2]
console.log(numbers3)
let numbers4=numbers1+numbers2
console.log(numbers4)
let numbers5=numbers1.concat(numbers2);
console.log(numbers5)

//rest operator
function animal(...animals){
    return animals;
}
console.log("lion","tiger","fox")