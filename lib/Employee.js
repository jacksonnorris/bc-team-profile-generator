function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
}

Employee.prototype.getRole = function () {
    return this.role;
}

Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getId = function () {
    return this.id;
}

Employee.prototype.getEmail = function () {
    return this.email;
}

module.exports = Employee;