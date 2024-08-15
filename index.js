// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const colors =require('colors');
const fs =require('fs');
const generateMarkdown =require('./assets/generateMarkdown.js');

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
        message:'please give me a description of your project?'
        
    }
    ,
    {
        type:'input',
        name:'installationInstruction',
        message:'please give me the installation instruction seperated by ,?'
    },
    {
        type:'input',
        name:'usageInformation',
        message:'please give me the usage information?'
    },
    {
        type:'input',
        name:'guidelines',
        message:'please give me the information about contribution gudelines??'
    },
    // {
    //     // need to write the contribution gudelines

    // },
    {
        type :'input',
        name:'testInstruction',
        message:'please give me the test instruction?'
    },
    {
        type:'checkbox',
        name:'license',
        message:'please choose one of the license?',
        choices:['MIT','Apache','GNU','Mozilla']
    },
    {
        type:'input',
        name:'githubUsername',
        message:'please enter your github username?'
    },
    {
        type:'input',
        name:'email',
        message:'please enter your valid email address?',
        validate:((email)=>{
            if (email.includes('@')){
                return true;
            }else{
                return 'please enter a valid email address';
            }
            })
        }  
  ]

  const generateReadme=(data)=>{
    const{title,description,installationInstruction,usageInformation,guidelines,testInstruction,license,githubUsername,email}=data;
    const installationSteps = installationInstruction.split(',').map(step => step.trim());
    console.log(installationSteps);
// this above and down is to cereate the steps in installation process
    const formattedSteps = installationSteps.map((step, index) => `${index + 1}. ${step}`).join('/n');
    const createTableofContenets=((questions)=>{
        console.log(questions.name)
    })
    console.log(createTableofContenets)
    return `# ${title}\n
  ## Description
  ${description}\n
  
//   we need to create a table of contents
  ## table of contents\n
  *[Description](#description)\n
  *[Installation](#installation)\n
  *[Usage](#usage)\n
  *[License](#license)\n
  *[Contributing](#contributing)\n
  *[Tests](#tests)\n
  *[Questions](#questions)

  ## Installation
  ${formattedSteps}\n
  ## Usage
  ${usageInformation}\n
  ## License

  ## Contributing
  ${guidelines}\n
  ## Tests
    ${testInstruction}\n
  ## Questions
 1) If you have any question feel free to contact me at email:${email}\n
  2) you can also visit my github profile at https://github.com/${githubUsername}
  
  `
  }
  
//   inquirer
//   .prompt(questions)
//   .then((data)=>{
// const {title,description}=data;
//   })
  
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        if (err){
            console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data)=>{
const {title,description}=data;

    writeToFile(`README.md`,generateReadme(data))
})
}

// Function call to initialize app
init();

