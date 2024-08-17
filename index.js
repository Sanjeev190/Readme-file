// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const colors =require('colors');
const fs =require('fs');
// const licenseBadge =require('./assets/generateMarkdown.js');
//This function will return the images of the license
function renderLicenseBadge(license) {
    if (license.includes('MIT')){
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    else if (license==="APACHE 2.0"){
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
   }
   else if (license==="GNU Affero General Public License v3.0"){
      return`![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  } 
  else if(license==="Mozilla Public License 2.0"){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  }
   else if (license==="None"){
    return ``
  }
  }
// this function will return the link of the license
  function renderLicenseLink(license) {
    if (license.includes('MIT')){
      return `https://opensource.org/licenses/MIT`
    }
    else if (license.includes('APACHE 2.0')){
      return `https://opensource.org/licenses/Apache-2.0`
    }
    else if (license.includes('GNU Affero General Public License')){
      return `https://www.gnu.org/licenses/agpl-3.0`
    }
    else if (license.includes('Mozilla Public License 2.0')){
      return `https://opensource.org/licenses/MPL-2.0`
    }
    else if (license==="None"){
      return ``
    }
  
  }
//   This function will return in to the license section of the readme file and returns the link of the license
  function renderLicenseSection(license) {
    if (!license) {
      return '';
  }
  return `
  
  This project is licensed under the ${license}. For more information, please visit [this link](${renderLicenseLink(license)}).
  `;
  }
  
// TODO: Create an array of questions for user input

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
    {
        type :'input',
        name:'testInstruction',
        message:'please give me the test instruction?'
    },
    {
        type:'checkbox',
        name:'license',
        message:'please choose one of the license?',
        choices:['MIT','Apache License 2.0','GNU Affero General Public License v3.0','Mozilla Public License 2.0']
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
    const licenseSection=  renderLicenseSection(license);
    const licenseBadge = renderLicenseBadge(license);
    // return the type of license
        console.log(typeof(license))
        // jusntrying to figur out the license what license badge is returning
        console.log(licenseBadge)
   
    
    return `## ${licenseBadge}\n
   
   
   ## ${title}\n
   ## ${licenseBadge}\n
   
  ## Description
  ${description}\n
  
  ## Table of contents\n
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
  ${licenseSection}\n

  ## Contributing
  ${guidelines}\n
  ## Tests
    ${testInstruction}\n
  ## Questions
 1) If you have any question feel free to contact me at email:${email}\n
  2) you can also visit my github profile at https://github.com/${githubUsername}
  
  `
  }

  

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
console.log(data.license)

    writeToFile(`README.md`,generateReadme(data))
})
}

// Function call to initialize app
init();

