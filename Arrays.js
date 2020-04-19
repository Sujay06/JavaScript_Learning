//Array Operations:

//Array-Add:
const sujay = [1,2,3,4,1,5];

//add elements to the beginning of the array;
sujay.unshift(0);
// //to add elements to the array to the end;
sujay.push(6,7);
// //add elements anywhere in the array;
sujay.splice(2,0,'a');
console.log(sujay);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Delete:
const numbers = [1,2,3,4,5];

//to delete first element of the array
const last = numbers.pop();
console.log(last);
//to delete first element of the array
const first = numbers.shift();
console.log(first);
//to delete any element of the array
const middle = numbers.splice(1, 1);
console.log(middle);
console.log(numbers);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Find(Primitive):

//to find the index of the element
console.log("index of the element is : ", sujay.indexOf(1) );
//to find the last index of the element
console.log('last index is : ', sujay.lastIndexOf('a'));
console.log(sujay.indexOf(10) !== -1);
//to find if an element exists in array
console.log(sujay.includes(1));


//Array-Find(Reference types);
const courses = [
    { id: 1, name: 'a' },
    { id: 2 , name: 'b'},
    { id: 3 , name: 'c'},
];
const course = courses.find( course => course.id === 2 );
console.log(course); 

console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array Combine and Slice:
const first1 = [1,2,3];
const second1 = [4,5,6];
//Array-Combine:
 const combine = first1.concat(second1);
 console.log("concatenated array is : ", combine);
//Array-Slice:
const slice =combine.slice(1,3);
console.log("Sliced array is : ",slice);

console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Spread:

const first2 = [11,22,33];
const second2 = [44,55,66];

const combined2 = [...first2,...second2];
const combined22 = [...first2, 'a',...second2,'b'];
console.log("combined array from spread operator is : ", combined2);
console.log("combined array from spread operator with element addition is: ", combined22);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Iterating:
const first3= ['a','b','c'];

//using for-each:
first3.forEach((number, index)=> {
    console.log("for-Each: ","index: ", index,",",  "arrayElement : " , number);
});
//using for-of loop:
for(let number of first3){
    console.log("For-of loop arrayElement: ", number);
}

console.log("\n");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Join:
const first4 = [1,2,3];
const joined = first4.join('.');
console.log("Joined array: ", joined);


//Array-Split(and then join!):
const str1 = 'this is my first message';
//split
const parts = str1.split(" ");
console.log("Split array is : ", parts);
//join
const combined4 = parts.join("-");
console.log("Combined after splitting is: ", combined4);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Sorting:
const first5 = [3,5,2,1,0,4];

//Sort:
first5.sort();
//Array-Reverse:
first5.reverse();
console.log("Sorted elements: ", first5);

//to sort arrays with reference types:
const first55 = [
    {id: 1, name: 'nodejs'},
    {id: 2, name: 'javascript'},
    {id: 3, name: 'angular.js'},
    {id: 4, name: 'agular.js'}
];

//function to compare and sort
first55.sort((a,b)=>{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(first55);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Testing:
const first6 = [-3,3];

//.every function returns a boolean type
const allPositive = first6.every(function(value){
    return value >= 0;
});
console.log(allPositive);

//.some returns a boolean type
const atLeastOnePositive = first6.some(function(value){
    return value >= 0 ;
});
console.log(atLeastOnePositive);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Filtering:

const first7 =  [2,5,8,-3,4,1,6];

//filter all the elements greater than or equal to zero and return them into new array.
const filteredArray = first7.filter( (value) => {
    return value >= 0;
});

console.log("Filtered array is: ", filteredArray);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Mapping:

const first8 =  [1,-1,2,3,8,99,3636];

const htmlItems = first8
    .filter(n => n >= 0 )
    .map(n=>'<li>' +n+ '</li>');

console.log("items:" , htmlItems);
const html = '<ul>'+ htmlItems.join('') + '</ul>' ;
console.log("html ul items: ", html);

//mapping array items to objects
const first88 = [1,2,-1,3,07,87,5567,3344];

const items1 = first88
    .filter(n => n >= 0)
    .map(n => ({value: n}) );

console.log(items1);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array-Reduction:
const first9 = [1,10,20,30,-10];
//add all the elements of the array and display the sum
const  sum = first9.reduce((initialValue, currentValue) => initialValue + currentValue);
console.log("sum: ", sum);

console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-1: To print the numbers within a given range

const num1 = arrayFromRange (1, 10);

function arrayFromRange(min,max){
    const output = [];
    for(let i=min;i<=max;i++)
        output.push(i);
    return output;
};
console.log("Output: ", num1);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-2: To recreate .includes function

const num2 = [1,2,3,4,5];

function includes(num2,searchElement){
    for(let element of num2)
        if(element === searchElement)
            return console.log("Element exists: "), true;
    return console.log("Element exists: "), false;
};
console.log(includes(num2,11));

console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-3: To exclude a number(s) from the array

const num3 =  [1,2,3,4,5,1,1,2,1,8,9,6,7];
const output3 = except(num3,[1,2]);

function except(array, excluded){
    const output3 = [];
    for(let element of array)
        if (!excluded.includes(element))
            output3.push(element);
    return output3;
};
console.log("filtered array is : ", output3);

console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ex-4: Movement of the array elements

const num4 = [1,2,3,4,5];
const output4 = move(num4, 0,4)
console.log("Re-arranged array is: ", output4);

function move(array, index, offset){
    const position4 =  index+offset;
    if(position4 < 0 || position4 >= array.length){
        console.error("Invalid Offset!");
        return;
    };

    const output4 = [...array];
    const element = output4.splice(index,1)[0];
    output4.splice(position4, 0, element);
    return output4;
};

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ex-5: Counting Occurences

const num5 = [0,1,2,3,4,5,1,1,1,2,3];
const output5 = countOccurences(num5,2);
console.log("Total no of occurences of the element is: ", output5);

function countOccurences(array,searchElement5){
   return array.reduce((accumulator5,currentElement5)=>{
    const occurences5 = (currentElement5 === searchElement5)? 1 : 0;

    console.log(accumulator5, currentElement5, searchElement5);

    return accumulator5 + occurences5 ;

   },0);
};

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ex-6: Finding the largest element in the array

const num6 = [1,2,3,4,5,6];
const output6 = getMax([1,2,3,4,5,6,100,7,8,9]);

console.log("The largest element in the array is : ", output6);

//using simple method;
// function getMax(array){
//     if (array.length === 0) return undefined;

//     let max = array[0];

//     for (let i=1; i <array.length;  i++)
//         if(array[i]> max)
//             max = array[i];
//     return max;
// };

//using .reduce method
function getMax(array){
    if(array.length === 0) return undefined

    return array.reduce((accumulator6, currentValue6)=>{
        return (currentValue6 > accumulator6) ? currentValue6 : accumulator6;
    });
};

console.log("\n");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ex-7: Performing various actions on given array
const movies  = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018 , rating: 3},
    {title: 'd', year: 2015, rating: 5}
]


//all the movies in 2018 with rating > 4
//Sort them by their rating
//Descending Order
//Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b)=>a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log("Titles: ", titles);

console.log("\n");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









































