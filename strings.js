// Finding the Length of a String
//

var firsNameLength = 0;
var firstName = "This is a whole length of string";
var firstNameLength = firstName.length;

console.log(firstNameLength)


// Bracket Notation to find characters in String
//

var find = ""
var findName = "What did you see?";
var find = findName[6]
console.log(find)


// Bracket Notation to find last Characters in String
//

var lastName = 0;
var myLastName = "This is a Basic Expression";
var lastName = myLastName[myLastName.length - 1];

console.log(lastName)


//Brackets Notation to find Nth - to - Last Character in String.
//

var files = ""
var filesName = "Research Basics"
var files = filesName[filesName.length - 3];


console.log(files)


// Word Blanks
//

function wordBlanks(myNoun, myAdjectives, myVerb, myAdverb)
{
	var result = ""
	result += "There was a " + myAdverb + " " + myNoun + " which was very aggressive to strangers. " + " It " + myVerb + " so fast that the little kid " + myAdjectives + " drove off his Bicycle😂."
	return (result);
}

console.log(wordBlanks("dog", "quickly", "ran", "big"))
