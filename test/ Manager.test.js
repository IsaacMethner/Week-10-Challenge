const Manager = require('../lib/Manager.js');
const Manager = new Employee('Isaac', '1111111', 'Isaacmethner11@gmail.com', 'manager');

test (' Testing if we can render information from the Manager objects',() => {
    exspect(Manager.name).toBe('Isaac');
    exspect (Manager.id).toBe('1111111');
    exspect (Manager.email).toBe('Isaacmethner11@gmail.com');
    exspext (Manager.role).toBe('manager');
});

test(' Testing if we can reder the Manager name from the getName method',() => {
exspect(Manager.getName()).toBe('Isaac');
});

test(' Testing f we can reder the Manager Id from the getId method', () => {
    exspect(Manager.getId()).toBe('1111111');
});

test (' Testing if we can reder the Manager email  with the getEmail method',() => {
    exspect(Manager.getEmail()).toBe('Isaacmethner11@gmail.com');
});

test (' testingf to see if we can reder the manager role using the getRole method',() => {
    exspect (Manager.getRole()).toBe('Manager');

});

