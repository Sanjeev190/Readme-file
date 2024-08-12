// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const colors=require('colors');
const fs=require('fs');
const generateMarkdown=require('./assets/generateMarkdown.js');

// TODO: Create an array of questions for user input
// What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?
const questions = [
    {
        type:'input',
        name:'title',
        message:'what is the title of your project?'
    },
    {
        type :'input',
        name:'description',
        message:'please give me a description of your project'
        
    },
    {
        type:'input',
        name:'installationInstruction',
        message:'please give me the installation instruction'
    },
    {
        type:'input',
        name:'usageInformation',
        message:'please give me the usage information'
    },
    {
        // need to write the contribution gudelines

    },
    {
        type :'input',
        name:'testInstruction',
        message:'please give me the test instruction'
    },
    {
        type:'checkbox',
        name:'license',
        message:'please choose one of the licens',
        choices:['MIT','Apache','GNU','Mozilla']
    },
    {
        type:'input',
        name:'githubUsername',
        message:'please enter your github username'
    },
    {
        type:'input',
        name:'email',
        message:'please enter your email address',
        validate:((email)=>{
            if (email.includes('@')){
                return true;
            }else{
                return 'please enter a valid email address';
            }
            })
        }  
  ]
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app

