/* 
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
*/


/*     // Web Storage API - provided by browser
// Session Storage, local storage
// setItem, getItem, removeItem, clear

// sessionStorage.setItem('name', 'john');
    localStorage.setItem('name', 'john');
    localStorage.setItem('age', 18);
    localStorage.setItem('job', 'student');
    localStorage.setItem('address', 'street 123');
    localStorage.setItem('country', 'UK');
    const name = localStorage.getItem('name');
    console.log(name);
    localStorage.removeItem('name');

    const newName = localStorage.getItem('name')
    console.log(newName);

    localStorage.clear(); 
*/
/* 
    // JSON.stringify(), JSON.parse()

    const friends = ['Sahara', 'anika', 'sara'];
    localStorage.setItem('friends', JSON.stringify(friends));
    console.log(friends);
    // 
    let fruits;
    if(localStorage.getItem('fruits')){
        fruits = JSON.parse(localStorage.getItem('fruits'));
    }
    else{
        fruits = [];
    }
    console.log(fruits);

    fruits.push('🍇');
    fruits.push('🍈');
    fruits.push('🍉');
    fruits.push('🍊');
    fruits.push('🍋');
    fruits.push('🍌');
    fruits.push('🍍');
    fruits.push('🍑');
    fruits.push('🍐');
    fruits.push('🍏');
    fruits.push('🍎');
    fruits.push('🥭');
    // localStorage.clear();
    localStorage.setItem('fruits', JSON.stringify(fruits));
 */

    