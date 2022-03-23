const Webpage = require('../lib/Webpage');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

describe("Webpage", () => {
    describe("init", () => {
        it('It should require a webpage to have an an array of employees', () => {
            const webpage = new Webpage([new Engineer('Jim', 1, 'j@gmail.com', 'Jimzo213'), new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte'), new Manager('Jack', 4, 'jack@gmail.com', 1)]);
            expect("employees" in webpage).toBe(true);
        })
    })
    describe("generatePage", () => {
        it('It should require a webpage to generate a valid html file when generateWebpage is called', () => {
            const webpage = new Webpage([new Engineer('Jim', 1, 'j@gmail.com', 'Jimzo213'), new Intern('Jacob', 2, 'jacob@gmail.com', 'UNC Charlotte'), new Manager('Jack', 4, 'jack@gmail.com', 1)]);
            expect(webpage.generateWebpage()).toBe(`<link rel='stylesheet' type='text/css' href='./style.css'><header><h2>About Our Company</h2></header><body><div class='container'><div class='employee'><div class='name'><p>Jim</p><p>Engineer</p></div><div class='cardContent'><p>ID: 1</p><p>Email: <a href='mailto:j@gmail.com'>j@gmail.com</a></p><p><p>Github: Jimzo213</p></p></div></div><div class='employee'><div class='name'><p>Jacob</p><p>Intern</p></div><div class='cardContent'><p>ID: 2</p><p>Email: <a href='mailto:jacob@gmail.com'>jacob@gmail.com</a></p><p><p>School: UNC Charlotte</p></p></div></div><div class='employee'><div class='name'><p>Jack</p><p>Manager</p></div><div class='cardContent'><p>ID: 4</p><p>Email: <a href='mailto:jack@gmail.com'>jack@gmail.com</a></p><p><p>Office Number: 1</p></p></div></div></div></body>`)
        })
    })
})