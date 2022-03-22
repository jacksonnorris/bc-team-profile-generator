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


const employeeTypes = ['Engineer', 'Intern', 'Manager'];
const employeeQuestions = ['What is their GitHub username?', 'What School do they go to?', 'What is their office number?'];

function generateEmployee(plain, unique, type) {
    name = plain.name;
    email = plain.email;
    id = plain.id;
    uniqueContent = unique.uniqueAttr;
    role = type;
    if (role === 'Engineer') {
        employeeList.push(new Engineer(name, id, email, uniqueContent));
    }
    else if (role === 'Intern') {
        employeeList.push(new Intern(name, id, email, uniqueContent));
    }
    else if (role === 'Manager') {
        employeeList.push(new Manager(name, id, email, uniqueContent));
    }

}

const employeeType = async (a) => {
    var prevAns = a;
    const employee = await inquirer.prompt([
        {
            type: 'list',
            message: `What is the role of the employee?`,
            name: 'employeeType',
            choices: employeeTypes,
        },
    ]);
    if (employee.employeeType === 'Engineer') {
        uniquePrompt(employeeQuestions[0], prevAns, 'Engineer');
    }
    else if (employee.employeeType === 'Intern') {
        uniquePrompt(employeeQuestions[1], prevAns, 'Intern');
    }
    else if (employee.employeeType === 'Manager') {
        uniquePrompt(employeeQuestions[2], prevAns, 'Manager');
    }
}
const plainPrompt = async () => {
    const answers = await inquirer.prompt([
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
    ]);
    employeeType(answers);
}
const uniquePrompt = async (msg, prevAns, type) => {
    const cont = await inquirer.prompt([
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
    ]);
    generateEmployee(prevAns, cont, type);
    if (cont.continue === 'Yes') { 
        plainPrompt();
    }
    else {
        const webpage = new Webpage(employeeList);
        console.log(webpage.generateWebpage());
        webpage.generateWebpage();
    }
}
plainPrompt();