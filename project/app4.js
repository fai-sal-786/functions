// *Password Generator*

// Q1:Generate a random password of length 10 characters. Ensure That the password contains a mix of uppercase letters , lowercase letters, and DOMStringList. Print the generated Password?


// function generatePassword(length){

    // const charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let password = '';
    // for(let i = 0; i < length; i++){
        // const randomIndex = Math.floor(Math.random() * charset.length);
        // password += charset[randomIndex];
    // }
    // return password;

// }
// const password = generatePassword(10);
// console.log(password);

// *WORD FINDER*

// Q4: Ask the user to input a sentence and a word . Check if the word is present in the sentence. if it is print word found otherwise print word not found?

// function checkWordInSentence() {
    // let sentence = prompt("Enter a sentence:");
    // let word = prompt("Enter a word:");

    // if (sentence.includes(word)){
        // console.log("word found");
    // }else {
        // console.log("word not found");
    // }
// }
// checkWordInSentence();

// * Word Capitalizer *

// Q3:Ask the user  to input a sentence capitalize the first letter of each word in the sentence and print the modified sentence.?

// function capitalizeSentence() {
    // let sentence = prompt("Enter a sentence");
    // let word = sentence.split('');
    // let capitalizedWords = word.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // let capitalizedSentence = capitalizedWords.join('');
    // console.log("Capitalized sentence:", capitalizedSentence);
// }
// capitalizeSentence();

// *STRING CONCATENATION*

// Q5:Ask the  user  to input their  first name  and last name seperately. Concatenate the first name and last name together with a space in between  and print the full name.

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt('Please enter your last name:');
// var fullname = firstName + "  "+ lastName;

// console.log(" your fullname is:", fullname);

// *Word Reverser*

// Q2:Ask the user  to input a Sentence. Reverse the order of words in the sentence and print the reversed sentence. 

// function reverseSentence(sentence){

    // var words = sentence.split('');

    // var reversedWords = words.reverse();

    // var reversedSentence = reversedWords.join('');

    // return reversedSentence;
// }

//  var inputSentence = prompt('please enter a sentenced:');

//  var reversedSentence = reverseSentence(inputSentence);

//  console.log('Reversed Sentence:', reversedSentence);