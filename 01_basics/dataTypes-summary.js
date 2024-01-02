// Primative

// 7 types: string, Number, Boolean, null, undefined, Symbol BigInt.

//EX:-

const score = 100
const scorevalue = 100.0

const isLoggedIn = false
const outsideTem =  null
let userEmail;

const Id = symbol('123')
const anotherId = symbol ('')
const bigNumber = 9548806612548648n

// QUES 1:-Is JavaScript a static type or a dynamic type?

// ANS:-JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.




// note Point: ye jitne bhi primative DataTypes hote hain ye Call by value hote hain matlab ke jab aap inko kahin se kahin copy karte hain to jo inka original data hai aapko nahi diya jata inka copy aapko diya jata hai unme jo bhi aap changes karte hain bo original me nahin hote hain bo copy mai changes hote  hain.

//**************************SECOND DATATYPES*************************

// Reference//>> we call it (non primitive)also
// ye value bo hain jinka reference aapko directly allocated kiya ja sakta hai

// iske andar aapko milte hain

// Array, objects, Functions 

// 1 Array// arrays ko aap hamesha (square brackit me likhte hai[])


const heros = ["shaktiman", "naagraj", "doga"]

//2 Object// Object ko aap hamesha (curly braces mein likhte hain)  

// isko aap varible me bhi declare kar sakte hain
//jaise see below

let myObj = {
    name: "saddam",
    age: 22,

}

//3 function ko kuch is tarha se likhte hain
// agar aap functions ko ik varibale me store karna chahte hain

const myFunction = function(){
    console.log("hello world");
}

//kisi bhi value ka ya fir kisi bhi cheej ka dataType pata karne ke liye
//aaap console.log(typeof yaha par value ka namm);