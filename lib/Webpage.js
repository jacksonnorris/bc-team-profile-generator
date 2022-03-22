const fs = require('fs');

class Webpage {
    constructor(employees) {
        this.employees = employees;
    }
    generateWebpage() {
        var htmlContent = `<link rel='stylesheet' type='text/css' href='./style.css'><header><h2>About Our Company</h2></header><body><div class='container'>`;
        for (var i in this.employees) {
            // console.log(this.employees[i].name);
            var uniqueContent = '';
            var name = this.employees[i].name;
            var id = this.employees[i].id;
            var email = this.employees[i].email;
            var role = this.employees[i].role;
            if (role === 'Engineer') { uniqueContent +=  `<p>Github: ${this.employees[i].gitHub}</p>` }
            else if (role === 'Manager') { uniqueContent += `<p>Office Number: ${this.employees[i].officeNumber}</p>`}
            else if (role === 'Intern') { uniqueContent += `<p>School: ${this.employees[i].school}</p>` }
            htmlContent += `<div class='employee'><div class='name'><p>${name}</p><p>${role}</p></div><div class='cardContent'><p>ID: ${id}</p><p>Email: <a href='mailto@:${email}'>${email}</a></p><p>${uniqueContent}</p></div></div>`
        }
        htmlContent += '</div></body>'
        fs.writeFile('./dist/index.html', htmlContent, (err) => {
            err? console.error(err) : console.log('Success!');
        });
        return htmlContent;
    }
}

module.exports = Webpage;

