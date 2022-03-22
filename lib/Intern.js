function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Intern';
    this.school = school;
}

Intern.prototype.getRole = function () {
    return this.role;
}

Intern.prototype.getName = function () {
    return this.name;
}

Intern.prototype.getId = function () {
    return this.id;
}

Intern.prototype.getEmail = function () {
    return this.email;
}

Intern.prototype.getSchool = function () {
    return this.school;
}

module.exports = Intern;