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
            expect(webpage.generateWebpage()).toBe(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /><link rel='stylesheet' type='text/css' href='./style.css'><header><h2>About Our Company</h2></header><body><div class='container'><div class='employee'><div class='name'><p><h4>Jim</h4></p><p><h4>Engineer</h4></p></div><div class='cardContent'><p><b>ID</b>: 1</p><p><b>Email</b>: <a href='mailto:j@gmail.com'>j@gmail.com</a></p><p><p><b>Github</b>: Jimzo213</p></p></div></div><div class='employee'><div class='name'><p><h4>Jacob</h4></p><p><h4>Intern</h4></p></div><div class='cardContent'><p><b>ID</b>: 2</p><p><b>Email</b>: <a href='mailto:jacob@gmail.com'>jacob@gmail.com</a></p><p><p><b>School</b>: UNC Charlotte</p></p></div></div><div class='employee'><div class='name'><p><h4>Jack</h4></p><p><h4>Manager</h4></p></div><div class='cardContent'><p><b>ID</b>: 4</p><p><b>Email</b>: <a href='mailto:jack@gmail.com'>jack@gmail.com</a></p><p><p><b>Office Number</b>: 1</p></p></div></div></div></body>`)
        })
    })
})