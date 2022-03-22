const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Webpage = require('./lib/Webpage')

const employeeList = []; 

const engineer = new Engineer('Jim', 1, 'j@gmail.com', 'Jimzo213');
const intern = new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte');
const employee = new Employee('James', 3, 'james@gmail.com');
const manager = new Manager('Jack', 4, 'jack@gmail.com', 1);

employeeList.push(engineer, intern, employee, manager);

const webpage = new Webpage(employeeList);

console.log(webpage.generateWebpage());