const fs = require('fs');

class Webpage {
    constructor(employees) {
        this.employees = employees;
    }
    generateWebpage() {
        var htmlContent = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /><link rel='stylesheet' type='text/css' href='./style.css'><header><h2>About Our Company</h2></header><body><div class='container'>`;
        for (var i in this.employees) {
            // console.log(this.employees[i].name);
            var uniqueContent = '';
            var name = this.employees[i].name;
            var id = this.employees[i].id;
            var email = this.employees[i].email;
            var role = this.employees[i].role;
            if (role === 'Engineer') { uniqueContent +=  `<p><b>Github</b>: ${this.employees[i].gitHub}</p>` }
            else if (role === 'Manager') { uniqueContent += `<p><b>Office Number</b>: ${this.employees[i].officeNumber}</p>`}
            else if (role === 'Intern') { uniqueContent += `<p><b>School</b>: ${this.employees[i].school}</p>` }
            htmlContent += `<div class='employee'><div class='name'><p><h4>${name}</h4></p><p><h4>${role}</h4></p></div><div class='cardContent'><p><b>ID</b>: ${id}</p><p><b>Email</b>: <a href='mailto:${email}'>${email}</a></p><p>${uniqueContent}</p></div></div>`
        }
        htmlContent += '</div></body>'
        fs.writeFile('./dist/index.html', htmlContent, (err) => {
            err? console.error(err) : console.log('Success!');
        });
        return htmlContent;
    }
}

module.exports = Webpage;