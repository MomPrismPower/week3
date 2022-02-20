// Leah Nassar Week 3 Coding Assignment - 
// Functions are labeled according to item number in the document describing tasks

function Question1() {

	function ageSubtraction(ageArray){
	
		let agesLength = ageArray.length;
		let lastAge = ageArray[agesLength - 1];
		let firstAge = ageArray[0];
		let answer1a = lastAge - firstAge;
		console.log("the first element of the array is " + firstAge + " and the last element is " + lastAge + ".");
		console.log(lastAge," - ",firstAge," = ",answer1a);
	}
	// Create an array with the following values
	let ages = [3,9,23,64,2,8,28,93];
	// programatically subtract the first element of the array from the last element of the array
	ageSubtraction(ages);
	// add any new age and do it again
	ages.push(13);
	ageSubtraction(ages);
	// now you can add an age and do it again
	
// uncomment the next 4 lines if you'd like to enter a number yourself from the console
//	let yourAge = window.prompt("Now you add an age to the array");
//	let yourAgeInt = parseInt(yourAge);
//	ages.push(yourAgeInt);
//	ageSubtraction(ages);

	// write a loop to iterate through an arrate and calculate the average age
	// average is caluculated by adding up all of the items in the array and dividing by
	// total number of items
	let ageTotal = 0;
	for (let i = 0; i < ages.length; i++) {
		ageTotal = ageTotal + ages[i];
	}
	console.log("ages in the array:", ages);
	console.log("The average age is ", ageTotal / ages.length);
}


function Question(item) {
	// this function takes the arguments 2a, 2b, 5, or 6 depending on the corresponding item in the assignment sheet
	
	// I do not understand why questions 2, 5, and 6 were separated as questions 5 and 6 
	// make question 2 easier.  
	// all 3 will be answered within this function
	
	
	
	let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
	let nameLengths = []; 
	
	
	// use a loop to iterate through the array and calculate the average number of letters
	// WHILE we do this iteration, we are also going to populate a new array (nameLengths) with
	// the lenghts of the items in the names array per question 5  since we are collecting
	// that information ANYWAY.  Why do this work twice??

	average=0;
	totalLetters=0;
	for (let iter=0; iter<names.length; iter++) {
		totalLetters=totalLetters+names[iter].length;
		// question 5 wants the lengths in an array - since we are already here, we'll do that now for later
		nameLengths.push((names[iter]).length);		
} 		
// if this is quest 2a, we want to return the average number of letters of all th names in the array
		if (item == "2a") {
		console.log("There are", totalLetters, "and ", names.length," values in the array.", "Average is: ", totalLetters / names.length);
		}
	
	
	
	// Question 2.b 
	// separated by spaces and print the result to the console
	// this can likely be optimized but I chose to initialize my newName string as empty before 
	// sending the array into the do/while loop.
	
	if (names.length-1 >0){
				let i=0;
				let newName = "";
				do {
					newName = newName + " " + names[i];
					i++;
				} while (i<names.length);
				if (item == "2b") {
				console.log(newName);
				}
	}
	
	// this is from Item 5, collected during 2a
	
	if(item == "5") {
	console.log("nameLengths Array:", nameLengths);
	}
	
	// this is question 6
	// write a loop to sum the items in nameLengths.
	let total = 0;
	if(item == "6") {
		for (let x=0; x < nameLengths.length; x++){
			total = total+nameLengths[x];	
			
		} 
		console.log("namesLenght total:", total);
	}
	
}
// I am defining this array globally  because I use it in 2 of functions below, Question3 and 4

function Question3() {
	// How to you access the last element in an arry?
	// we did this in Question1() line 9
	// because all arrays start at a count of 0, you find the last member of the arry
	// buy caluclating the length of the array and subtracting 1
	// why do we subtract 1? because the index starts at 0. The length of the array would assume start at 1
	//
	console.log("My Question 3 sample array:", sampleArray);
	console.log("the last element in my array:", sampleArray[sampleArray.length - 1]);
}
function Question4() {
	
	// how to you access the first element in any array?
	// while some programming languages DO have a "start" function in their libraries for arrays
	// and javascript MIGHT have one also
	// its also safe to assume that your array is indexed at 0 and to call it that way.
	
 	console.log("My Question 4 sample array (same as 3):", sampleArray);
	console.log("the first element in my array:", sampleArray[0]);
}


// Assignment 7, write a function that takes 2 params, word and n, where word is a string 
// and n is an int and returns word concatonated to itself n times
function Question7(word, n){
	console.log("Welcome to question7");
	// the problem i see with this code is that I am not testing to ensure that "n" is an integer.
	// I am trusting that an integer would be sent and that is incorrect.
	
		if (n>1) {
			if(word) {
				let i=1;
				let newWord=word;
				do {
					newWord = newWord + word;
					i++;
				} while (i<n);
				return(console.log("Word:" ,word,", n: ",n,", new word: ",newWord));
			} else return(console.log("error: word is invalid and not a proper string: ", word));
		}  else return (console.log("error: n is not greater than 1:", n));	

}


// Question 8
// 8.	Write a function that takes two parameters, firstName and lastName returns a full name
// (the full name should be the first and the last name separated by a space)
function Question8(firstName, lastName){
	// this only works for "western" formatted names where giving name appears first
	// and family name appears second.  if this were a localized function, the order 
	// would be reversed and the words "first/last" would be inappropriate.
	// "family name" and "given name" would be more appropriate
	let fullName = firstName+ " "+lastName;
	return(fullName);
	
}		


// Question 9
// Write a function that takes an array of numbers and returns true if the sum 
// of all the numbers in the array is greater than 100.
function Question9(numbersArray) {
	// this assignment doesnt actually tell me how to get the array
	// I also wrote a function that takes an array as a paramter in question 1 already
		
		let total = 0;	
		for (let i=0; i < numbersArray.length; i++){
			total = total+numbersArray[i];
		}
		if (total > 100) { 
			return true; 
		} else { return false;
		}
}
// Question 10
function Question10(numbersArray) {
	// write a function that takes an array of numbers and returns the average of all the elements in the array
	
	let total = 0;	
	for (let i=0; i < numbersArray.length; i++){
		total = total+numbersArray[i];
	}
	return(console.log("The average of all the numbers in your array is", total / numbersArray.length));
	
}

// Question 11
function Question11(array1, array2) {
	
	// Write a function that takes two arrays of numbers and returns true if the average of the elements
	// in the first array is greater than the average of the elements in the second array.
	average1=0;
	average2=0
	total1=0;
	total2=0;
	
	//calc average 1
	for (let i=0; i<array1.length; i++) {
		total1=total1+array1[i];
	}
	average1 =  total1 / array1.length;
	
	//calc average 2
	for (let n=0; n<array2.length; n++) {
		total2=total2+array2[n];
	}
	
	average2 =  total2 / array2.length;

	if (average1 > average2) {
		
		return true;
	}	else if (average1 < average2) {
		return false;
	}	else return "the values are equal";
	
}
// question 12
function Question12() {
	
	
	// write a function called willBuyDrink that takes a boolean isHotOutside, 
	// and a number moneyInPocket, and returns true if it is hot outside and if 
	// moneyInPocket is greater than 10.50.
	
	function willBuyDrink(isHotOutside,moneyInPocket) {
		
		return ((isHotOutside) && moneyInPocket > 10.5);
		
	}		

	// "isHotOutside" = true/false, "moneyInPocket" = monetary amount
	// whole expression is true or false 
	
	console.log("hey i have 20 bucks and its hella hot, can i get a drink?", willBuyDrink(true, 10));
	
	
}



// need this array for question 3 and 4 so we'll make it global
var sampleArray = ['cats', 'dogs','snakes','birds','fish'];
console.log("Question1 ");
Question1();
// the function "Question(item) includes the answer to several questions - you must pass it the specific
// question for which you are looking for answers.  I have run it for every question below.
console.log("Question 2.a");
Question("2a");
console.log("Question 2.b");
Question("2b");
console.log("Question 3");
Question3();
console.log("Question 4");
Question4();
console.log("Question 5");
Question("5");
console.log("Question 6");
Question("6");
console.log("Question 7 - takes 2 parameters, a string and an integer, per the assignment instructions");
Question7("Hello",3);
console.log("Question 8 - takes 2 params First name and last name IN THAT ORDER and returns a concatonated full name.");
console.log(Question8("Leah","Nassar"));
// Question 9 assumes passing in an array of numbers so here is a sample array
var myArray = [1,42,37,4,10]; // this should return false
console.log("Question 9");
console.log("myArray for the next couple questions", myArray);
console.log("is sum of values in myArray greater than 100", Question9(myArray));
// Question 10 we'll use the array from 9
console.log("Question 10, with the same array as 9");
Question10(myArray);
// Question 11 says to send 2 arrays - I'm just going to send the same one twice for PoC. Numbers are numbers.
// because we sent the same array twice, we will alway expect false because they are equal.
console.log("Question 11");
console.log("is the average of the first array greater than the second?" , Question11(myArray, myArray));
// I can run it again with a different array though
var myArray2 = [1,42,37,4,10,21,5534]; 
console.log("2nd run: is the average of the first array greater than the second?" , Question11(myArray, myArray2));
console.log("3rd run in reverse: is the average of the first array greater than the second?" , Question11(myArray2, myArray));
console.log("Question 12 - contains a function which determines if you can buy a drink, given enough cash and it being hot enough");
Question12();




