const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Webpage = require('./lib/Webpage')
const inquirer = require('inquirer');
const { listenerCount } = require('process');

const employeeList = []; 

// const engineer = new Engineer('Jim', 1, 'j@gmail.com', 'Jimzo213');
// const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
// const employee = new Employee('James', 3, 'james@gmail.com', 'Employee');
// const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);

// employeeList.push(engineer, intern, employee, manager);

// const webpage = new Webpage(employeeList);

// console.log(webpage.generateWebpage());
// webpage.generateWebpage();

var name;
var id;
var email;
var role;
var uniqueContent;


const employeeTypes = ['Engineer', 'Intern', 'Manager', 'Done Adding'];
const employeeQuestions = ['What is their GitHub username?', 'What School do they go to?', 'What is their office number?'];

function generateEmployee(a, b, type) {
    if (type === 'Engineer') {
        
    }
    else if (type === 'Intern') {

    }
    else if (type === 'Manager') {
        
    }

}

const employeeType = (a) => {
    var prevAns = a;
    return inquirer.prompt([
        {
            type: 'list',
            message: `What is the role of the employee?`,
            name: 'employeeType',
            choices: employeeTypes,
        }, 
        
    ]).then((employee) => {
        if (employee.employeeType === 'Engineer') {
            uniquePrompt(employeeQuestions[0], a, 'Engineer');
        }
        else if (employee.employeeType === 'Intern') {
            uniquePrompt(employeeQuestions[1], a, 'Intern');
        }
        else if (employee.employeeType === 'Manager') {
            uniquePrompt(employeeQuestions[2], a, 'Intern');
        }
        // const webpage = new Webpage(employeeList);
    })
}
const plainPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the email of the employee?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the id of the employee?',
            name: 'id'
        },
    
    ]).then((answers) => {
        employeeType(answers);
        // const webpage = new Webpage(employeeList);
    })
}
const uniquePrompt = (msg, prevAns, type) => {
    return inquirer.prompt([
        {
            type: 'input',
            message: msg,
            name: 'uniqueAttr'
        },
        {
            type: 'list',
            message: 'Did you want to add any more employees?',
            name: 'continue',
            choices: ['Yes', 'No']
        }
    ]).then((cont) => {
        generateEmployee(prevAns, cont, type);
        if (cont.continue === 'No') {  }
        else {
            
        plainPrompt(); 
        }
    })
}
plainPrompt();