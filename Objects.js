// 1.An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value.

// 2.Objects are more complex and each object may contain any combination of these primitive data-types as well a s reference data-types.

// 3.Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Basics:

//Note:
    //1.An object may have different properties, like numbers, strings, booleans and function(s).
    //2.If a function is part of an object, then it is called as "method".

//1.Creating an object(circle) with different properties(boolean, numebrs and a method)

const circle = {
    radius: 1,
    location: {
        x:1,
        y:2,
        z:3
    },
    isVisible: true,
    draw: ()=>{
        console.log("Draw the circle with the given specifications");
    }
};

circle.draw();  //calling "draw" method of circle obj.

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Factory Function to create objects: Creating all logics in one place.
    //Uses Camel naming convention: oneTwoThreeFour

function createCircle(radius){
    return {
        radius,
        draw(){ console.log("Draw the circle with the given specifications"); }
    };
}
const circle1 = createCircle(10);
console.log(circle1);

const circle11 = createCircle(2);
console.log(circle11);

const circle111 = createCircle(25);
console.log(circle111);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Constructor functions to create Objects
    //Uses this  and new keywords.
    //uses Pascal naming convention: OneTwoThreeFOur

function Circle(radius){
    this.radius = radius,
    this.draw = ()=>{
        console.log("Draw a circle!");
    } 
}

const circle2 = new Circle(100);
console.log(circle2);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Dynamic nature of Objects: Modifying objects after they are created.
const circle3 = {
    radius: 1
};

//adding properties after circle3 has been declared.
circle3.color = 'blue';
circle3.draw = ()=>{};
circle3.thickness= '5mm';

//to remove a property use "delete" operator
delete circle3.thickness;

console.log(circle3);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//5,6.Constructor Properties:

//1.When we create an object using object-literal syntax(factory functions),internally the JS engine uses a constructor function to define it.

//2.Every function in JS is an Object!!.

////////////////////////////////////////////////////////////////////////////////////////////////////////

//7.Primitives vs Reference Types:

//Primitives:
let x = 10;
let y = x;

x=20;

console.log("x:", x);   //x takes the value of 20
console.log("y:", y);   //y still retains the value of 10.

//Reference:
let x1 = {value: 100};
let y1 = x1;

x1.value= 200;

console.log("x1:", x1); //x1 takes the value of 200
console.log("y1:", y1); //y1 takes the value of 200 as well.

//Note:
    //1.Primitives are copied by their values.
    //2.Objects/Reference types are copied by their reference.

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//8.Enumerating  property of objects:
    //working with for-in, for-of loops
const circle8 = {
    radius8: 1,
    draw(){
        console.log("Draw a circle!!!");
    }
};

//for-in:
for (let key in circle8)
  //console.log(key);   //Displays only keys
    console.log(key,circle8[key]);     //Displays both key-value pairs

//for-of: Accesing properties and methods-1
for (let key of Object.keys(circle8))  
    console.log(key);   //Displays only keys. "Object.keys(circle8)" calls in the properties of circle8, calling just the circle8 throws "Obj not iterable" error.

//for-of: Accesing properties and methods-2
for (let entry of Object.entries(circle8))  
console.log(entry); //Object.entries(circle8) returns every property as an array.

//if-in: to search for property of the obj, passed in if().
if('radius8' in circle8) console.log("YES");       //Displays YES
if ('color' in circle8) console.log ("yes");    //Does not display anything.

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//9.Cloning an Object:

const circle9 = {
    radius : 10,
    draw(){
        console.log("Draw the circle9");
    }
};
console.log("circle9: ", circle9);

//Method-01: Using Assign operator
const circle99 = Object.assign({},circle9); 
//(OR)
//const circle99 = Object.assign({color: 'red'},circle9);
console.log("circle99: ", circle99);

const circle999 = Object.assign ({thickness: 10}, circle99);
console.log("circle999: ", circle999);

//Method-02: Using Spread Operator
const anotherCircle = {...circle9};     
console.log("anotherCircle: ", anotherCircle);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//10.Garbage Collection in Objects:
    
    //Refers to memory allocation and de-allocation for variables. This happens automatically in the background.
    
////////////////////////////////////////////////////////////////////////////////////////////////////////

//11.Math.
    //Refer to Javascript math operators on web.

//Finding the sqaureroot of a number
const sqroot = Math.sqrt(100);
console.log("Square root is: ", sqroot);

//Finding the largest and smallest numbers in the list
const largest = Math.max(1,2,3,45,100,101,1000,1002);
const smallest =  Math.min(11111,249230,22,45,6);
console.log("Largest number in the list is : ", largest);
console.log("Smallest number in the list is : ", smallest);


//Rounding of a number
const roundoff = Math.round(1.4);
console.log("Nearest whole number is :", roundoff);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//12.Strings.
    //Refer to Javascript string methods,escape operators and objects on web

const msg = '  This is my  first message  '; 

console.log("msg: ", msg);
console.log("length: ", msg.length);
console.log("msg[0] : ", msg[0]);
console.log("does message include word *the* ??", msg.includes('the'));
console.log("index of :", msg.indexOf('is'));
console.log("Replace first with second :", msg.replace('first','second'));
console.log("Changing msg to uppercase: ", msg.toUpperCase());
console.log("trimming the msg: ", msg.trim());
console.log("trimming to the left: ", msg.trimLeft());

console.log("\n");
///////////////////////////////////////////////////////////////////////////////////////////////////////

//13.Template Literals:
    //Refers to usage of ``
    //Useful in constructing emails
    //can add placeholders.

const msg1 = "This is just a message!";
console.log("msg1:", msg1);

const msg2 = `This is yet 
'another' 
message!!`;
console.log("msg2:", msg2);


console.log("\n");
///////////////////////////////////////////////////////////////////////////////////////////////////////

//14.Date Object.

const today =  new Date();
const newDate = new Date('April 6 1995 10:00');

//get attributes from the date.
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());

//forcefully set a year.
today.setFullYear(2000);

//commonly used format in web and mobile applications:
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());

console.log("today:", today);
console.log("newDate:", newDate);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-1: Creating an address obj with properties street,city and Zipcode. Create a showAddress function to display all the key value pairs.

const address1 = {
    street: 'abc',
    city: 'xyz',
    zipcode: '499841'
};

function showAddress(address1){
    for (let key in address1)
        console.log(key, address1[key]);
}

showAddress(address1);

console.log('\n');
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-2: Write factory and constructor functions to initialise the object

const address2 = factoryFunction('abc', 'pqr', 12344);
console.log("address2: ",address2);
function factoryFunction(street, city, zipCode){
   return { 
    street,
    city,
    zipCode
   }
}; 

const address22 = new  ConstructorFunction('abcc', 'aadfj', 12983791);
console.log("Address22: ", address22);

function ConstructorFunction(street, city, zipCode){
        this.street = street,
        this.city = city,
        this.zipCode = zipCode
};

console.log('\n');
//////////////////////////////////////////////////////////////////////////////////////////////////////////
