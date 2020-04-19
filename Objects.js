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

//5.