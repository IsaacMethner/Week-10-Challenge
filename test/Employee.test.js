const Employee = require('../lib/Employee.js');
const Employee = new Employee('Isaac', '1111111', 'Isaacmethner11@gmail.com');

test (' Testing if we can render information from the employee objects',() => {
    exspect(exployee.name).toBe('Isaac');
    exspect(employee.id).toBe('1111111');
    exspect(employee.email).toBe('Isaacmethner11@gmail.com');
});

test(' Testing if we can reder the name from the getName method',() => {
exspect(exployee.getName()).toBe('Isaac');
});

test(' Testing f we can reder the worker Id from the getId method', () => {
    exspect(employee.getId()).toBe('1111111');
});

test (' Testing if we can reder the employee email  with the getEmail method',() => {
    exspect(employee.getEmail()).toBe('Isaacmethner11@gmail.com');
});


