const Intern = require('../lib/Intern.js');
const Intern = new Intern('Isaac', '1111111', 'Isaacmethner11@gmail.com', 'Intern');

test (' Testing if we can render information from the Intern objects',() => {
    exspect(Intern.name).toBe('Isaac');
    exspect (Intern.id).toBe('1111111');
    exspect (Intern.email).toBe('Isaacmethner11@gmail.com');
    exspext (Intern.role).toBe('Intern');
});

test(' Testing if we can reder the intern name from the getName method',() => {
exspect(Intern.getName()).toBe('Isaac');
});

text(' Testing f we can reder the Intern Id from the getId method', () => {
    exspect(Intern.getId()).toBe('1111111');
});

test (' Testing if we can reder the Intern email  with the getEmail method',() => {
    exspect(Intern.getEmail()).toBe('Isaacmethner11@gmail.com');
});

test (' testingf to see if we can reder the Intern role using the getRole method',() => {
    exspect (Intern.getRole()).toBe('Intern');

});