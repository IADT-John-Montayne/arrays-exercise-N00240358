let names = ["John", "David", "Mary"]; //Array of names
//console.log(names[0]); //Pulls first name "John"

let scores = [42, 55, 61]; //array of Scores

let colors = ["red", "blue", "green"]; //Array of colors, is a array of strings

//Change what is already there, see how many is in array, add new fruit onto end of array, remove last fruit, add fruit to beginning, remove first fruit
let fruits = ["apple", "banana", "orange"]; //Fruits array
console.log(fruits); //Shows the initial fruits array
fruits[1] = "Pear";	//Changes banana to Pear
console.log(fruits[1]); //Pulls the new fruit "Pear", that was changed from banana
console.log(fruits.length); //Pulls the length of the array, which is 3
fruits.push("grape"); //Adds grape to the end of the array
console.log(fruits); //Shows the fruits array after adding grape
console.log(fruits.length); //Pulls the new length of the array, which is 4, After adding grape
fruits.pop(); //Removes the last fruit "grape"
console.log(fruits); //Shows the fruits array after removing grape
fruits.unshift("strawberry"); //Adds strawberry to the beginning of the array
console.log(fruits); //Shows the fruits array after adding strawberry
fruits.shift(); //Removes the first fruit "strawberry"
console.log(fruits); //Shows the fruits array after removing strawberry

//Loop to show one by one what is in the array
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
//Another way to loop through the array
for (let fruit of fruits){
	console.log(fruit);
}
// Way to find the index # of a fruit
console.log(fruits.indexOf("orange")); //Finds the index of orange in the array, which is 2
console.log(fruits.indexOf("kiwi")); //Tries to find kiwi in the array, which is not there, so it returns -1

//Slicing, starts from where the index is 0, till the start of index 2, will not take index 2, will stop there.
let greenFruits = fruits.slice(0, 2) //Creates a new array with the first two elements of fruits

//Splice, changes the original array, removes or replaces existing elements
fruits.splice(1, 1); //At index 1, removes pear
fruits.splice(1, 0, "kiwi", "mango"); //At index 1 there is nothing, if there was anything it will remove them and then add kiwi and mango

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
