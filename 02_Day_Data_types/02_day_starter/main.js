//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

//2.Print the string on the browser console using console.log()
console.log(challenge)

//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length, "/:challenge length")

//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase(), "/:change to upper case")

//5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase(), "/:change to lower case")

//6.Cut (slice) out the first word of the string using substr() or substring() method
//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//two arguments: the starting index and the stopping index
console.log(challenge.substring(3,22), "/:remove the number 30")
console.log(challenge.substr(11,22), "/:remove all but the JavaScript")

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"), "/:check if it includes Script")

//9.Split the string into an array using split() method
console.log(challenge.split(), "/:string into array")

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '), "/:string into array at space")

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
stringAtComma = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(stringAtComma.split(','), "/:string into array at comma")

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"), "/:replace JavaScript to Python")

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15), "/:character at index 15")

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(15), "/:character code of J")

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"), "/:first occurrence of a")

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"), "/:last occurrence of a")

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentenceExercise = "You cannot end a sentence with because because because is a conjunction";
console.log(sentenceExercise.indexOf("because"), "/:first occurrence of because")

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceExercise.lastIndexOf("because"), "/:last occurrence of because")

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceExercise.search("because"), "/:search to find the position of the first occurrence of because")

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
challengeRemoveSpaces = " 30 Days Of JavaScript ";
console.log(challengeRemoveSpaces.trim(' '), "/:remove spaces")

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'), "/:starts with 30?")

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'), "/:ends with Script?")

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/\a+/g), "/:match to find all a's")
// a with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

/*
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
*/

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
mergeString = "30";
console.log(mergeString.concat("Days", "Of", "JavaScript"), "/:merge the challenge string")

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("30".repeat(2), "/:repeat 30")

//EXERCISE 2

//1.Using console.log() print out the following statement:
console.log(`"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."`)

//2.Using console.log() print out the following quote by Mother Teresa:
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof("10") == typeof(10));
console.log(typeof(Number("10")) == typeof(10), "/:make typeof '10' equal to number 10");

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10)
console.log(Math.round(parseFloat('9.8')) == 10)

//5.Check if 'on' is found in both python and jargon
const python = 'python'
const jargon = 'jargon'
console.log(python.includes('on') && jargon.includes('on'), 'python and jargon include on')

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
const stringJargon = 'I hope this course is not full of jargon'
console.log(stringJargon.includes('jargon'), 'does the sentence include the word jargon?')

//7.Generate a random number between 0 and 100 inclusively.
//8.Generate a random number between 50 and 100 inclusively.
//9.Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random () * 101), 'random nr between 0 and 100')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomInt(49, 101), 'random nr between 50 and 205')
console.log(getRandomInt("", 256), 'random nr between 50 and 205')

//10.Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log(`${exponentiation(1)}\n${exponentiation(2)}\n${exponentiation(3)}\n${exponentiation(4)}\n${exponentiation(5)}`)

function exponentiation(number) {
let numbersArray = [number];
    
    for (let i = 0; i < 4; i++) {
        result = number ** i
        numbersArray.push(result)
    }

return numbersArray.join(' ')
}

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
stringBecause = "You cannot end a sentence with because because because is a conjunction"
console.log(stringBecause.substr(31, 23))

//EXERCISE 3

//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

const stringLove = "Love is the best thing in this world. Some found their love and some are still looking for their love."
const stringLoveCount = stringLove.split(' ');

const loveCount = /love/gi

console.log(stringLoveCount.length, "how many words in the full sentence")
console.log(stringLove.match(loveCount).length, "how many times love appears")

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const becauseString = "You cannot end a sentence with because because because is a conjunction."
const becauseCount = /because/gi
console.log(becauseString.match(becauseCount).length, "how many times because appears")

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanSentence = sentence.replace(/%|#|@|\$|;|&/gi, '')
console.log(cleanSentence, "//: clean sentence without the special characters")

//UNDER CONSTRUCTION
const sentenceArray = cleanSentence.split(' ');
console.log(sentenceArray, "//: sentence array")

function frequentWords (array) {
    let count = 0;
    let wordAndCount = ''
    for (let i = 0; i < array.length; i++) {
        count = array.match(/array[i]/g)
        wordAndCount = `${array[i]}: ${count} times`
        return console.log(wordAndCount)
    }
}

frequentWords(sentenceArray)




