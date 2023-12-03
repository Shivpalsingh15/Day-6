//Array method
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. 

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
/*
Parameters
callbackFn
A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array map() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. 



2) The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


Parameters
callbackFn
A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array filter() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. 

3) 
The reduce() method in JavaScript is used to reduce the elements of an array to a single value. It iterates over each element of the array and applies a callback function to combine the elements into a single result.

array.reduce(callback, initialValue);


callback: A function that is called for each element in the array. It takes four arguments: accumulator, currentValue, currentIndex, and array.

accumulator: The accumulated result of the previous callback invocations, or the initial value if provided.
currentValue: The current element being processed in the array.
currentIndex: The index of the current element being processed.
array: The array on which reduce was called.
initialValue (optional): A value to use as the initial accumulator. If not provided, the first element of the array is used as the initial accumulator.


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


Parameters
callbackFn
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.


4) reverse

The reverse() method in JavaScript is used to reverse the order of elements in an array. The method mutates the original array, meaning it changes the order of the elements in-place, rather than creating a new reversed array.

let fruits = ['apple', 'banana', 'cherry'];

fruits.reverse();

console.log(fruits);
// Output: ['cherry', 'banana', 'apple']


5) includes


The includes() method in JavaScript is used to check whether an array includes a specific element. It returns a boolean value indicating whether the specified element is found in the array.

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('orange')); // Output: false


6) The push() method in JavaScript is used to add one or more elements to the end of an array. It mutates the original array by adding the specified elements, and it returns the new length of the array


let fruits = ['apple', 'banana', 'cherry'];

let newLength = fruits.push('orange', 'grape');

console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'orange', 'grape']
console.log(newLength);
// Output: 5 (the new length of the array)


*/