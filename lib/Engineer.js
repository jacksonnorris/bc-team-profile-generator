function Engineer(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Engineer';
}

Engineer.prototype.getRole = function () {
    return this.role;
}

module.exports = Engineer;