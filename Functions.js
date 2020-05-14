//1.Function Declaration and Calling:

//function declaration
function talk(){
    console.log('talk');
}

//Function expressions(Anonymous)
let action1 = function(){
    console.log("talking1");
};

//Function Expressions(named)
let action11 = function talking(){
    console.log("talking11");
};

//calling a function:
talk();
action1();
action11();

console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Hoisting:

//The diference between a normal function and funciton expression is that call to the normal funciton can be done from anywhere whereas call to a function expression has to take place after it is defined. Eg:

// see();  //calling a funciton before it is declared
// function see(){ console.log("seeing") };
// console.log("hello");
// console.log("hello");
// console.log("hello");
// let test2= function see2(){ console.log("seeing2")};
// test2();    //calling an expression after it is declared.

//Hoisting: Act of moving functions(normal) to the top of the file by the javascript engine. Note: Funciton Expressions will not be moved as they are treated as objects.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Arguments:

function add3(a,b){
    return a+b;
}
console.log(add3(1,1));
//console.log(add3(1)); returns NaN: Not a Number.
//console.log(add3(1,2,3,4,5,6)); takes only first 2 args as the function input.

//looking into function arguments:
function add33(a,b){
    console.log(arguments);
    return a+b;
}
console.log(add33(1,2,3,4,5,6,9,8,7));  //Returns the arguments as a list of array.

function sum3(){
    let total3 = 0;
    for(let test3 of arguments){
        total3 += test3 ;    
    }
    return total3;
}
console.log(sum3(1,2,10,100));

console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Rest Operators:
    //3 dots(...)used with the arguments spreads all the arguments into an actual array list.
    //Rest parameters should always be written as the last argument in the list of agruments.

function sum4(...args4){
    console.log(args4);
}
console.log(sum4(100,100,100));

//using array methods on normal functions:
function sum44(...args44){
    return args44.reduce((x,y)=> x + y);    //Adds all the elements of the args44 array and returns the sum.This reduces the code as you don not have to declare the extra needed variables and arrays.
}
console.log(sum44(100,100,100,100));


 //function to find the total price after discount in a shopping cart:
    //Steps:
        //1.convert the list of argumnents into an array using (...)
        //2.reduce this array
        //3.apply the logic

 function sum444(discount,...prices){
     const total4 = prices.reduce((a,b)=> a+b); //Reduce the args to array
     return total4*(1-discount);
 }
 console.log('final price is : ',sum444(0.1,100,100,100));

 console.log('\n');
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////