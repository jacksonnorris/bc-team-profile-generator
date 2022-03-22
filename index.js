const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Webpage = require('./lib/Webpage')
const inquirer = require('inquirer');

const employeeList = []; 

// const engineer = new Engineer('Jim', 1, 'j@gmail.com', 'Jimzo213');
// const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
// const employee = new Employee('James', 3, 'james@gmail.com', 'Employee');
// const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);

// employeeList.push(engineer, intern, employee, manager);

// const webpage = new Webpage(employeeList);

// console.log(webpage.generateWebpage());
// webpage.generateWebpage();

const employeeTypes = ['Engineer', 'Intern', 'Manager'];
const employeeQuestions = ['What is their GitHub username?', 'What School do they go to?', 'What is their office number?'];

inquirer.prompt([
    {
        type: 'list',
        message: 'What type of Employee?',
        name: 'employeeType',
        choices: employeeTypes,
    },
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the employee id?',
        name: 'id'
    },
    
]).then((answers) => {


    // const webpage = new Webpage(employeeList);
})