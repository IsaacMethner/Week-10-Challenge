const Engineer = require("../lib/Engineer.js");
const Engineer = new Engineer('Isaac', '1111111', 'Isaacmethner11@gmail.com', 'Engineer');

test (' Testing if we can render information from the Engineer objects',() => {
    exspect(Engineer.name).toBe('Isaac');
    exspect (Engineer.id).toBe('1111111');
    exspect (Engineer.email).toBe('Isaacmethner11@gmail.com');
    exspext (Engineer.role).toBe('Engineer');
});

test(' Testing if we can reder the Engineer name from the getName method',() => {
exspect(Engineer.getName()).toBe('Isaac');
});

test(' Testing f we can reder the Engineer Id from the getId method', () => {
    exspect(Engineer.getId()).toBe('1111111');
});

test (' Testing if we can reder the Engineer email  with the getEmail method',() => {
    exspect(Engineer.getEmail()).toBe('Isaacmethner11@gmail.com');
});

test (' testingf to see if we can reder the Engnner role using the getRole method',() => {
    exspect (Engineer.getRole()).toBe('Enginner');

});