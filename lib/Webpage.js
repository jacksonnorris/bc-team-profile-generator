class Webpage {
    constructor(employees) {
        this.employees = employees;
    }
    generateWebpage() {
        var htmlContent = '';
        for (var i in this.employees) {
            console.log(this.employees[i].name);
            htmlContent += `<div>${this.employees[i].name}</div>`
        }
        return htmlContent;
    }
}

module.exports = Webpage;

