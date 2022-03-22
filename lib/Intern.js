function Intern(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Intern';
}

Intern.prototype.getRole = function () {
    return this.role;
}

module.exports = Intern;