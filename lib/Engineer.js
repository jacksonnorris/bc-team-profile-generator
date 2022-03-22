function Engineer(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Engineer';
}

Engineer.prototype.getRole = function () {
    return this.role;
}

Engineer.prototype.getName = function () {
    return this.name;
}

Engineer.prototype.getId = function () {
    return this.id;
}

Engineer.prototype.getEmail = function () {
    return this.email;
}

module.exports = Engineer;