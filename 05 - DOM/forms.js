// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const names = document.getElementById('names');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Form submitted');
    console.log(names.value);
    console.log(password.value);
})