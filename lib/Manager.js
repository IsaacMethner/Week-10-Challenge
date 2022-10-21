const Employee = require ("./Employee");

class Manager extends Employee {

constructer({name,email,id,officeNumber}) {

super ({name,email,id});

this.officeNumber = officeNumber;

this.role = "manager"
}

getOfficeNumber() {
    return this.officeNumber;
}

getRole () {
    return this.role;
}
}

module.exports = Manager;