/*
For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer
*/



// Message generator

let messages = ['Hi, how are you?', 'Bonjour, comment allez-vous?', 'Hola, que tal?', 'Yo, bro, what have you been up to?', 'Salut, comment ca va?'];
const mixedMessage = (array) => {

    let randomChoice = Math.floor(Math.random() * array.length);
    // console.log(randomChoice);
    const output = array[randomChoice];
    return output;
};

const greet = (mixedMessage(messages));
console.log(greet);
