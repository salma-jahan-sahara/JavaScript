/* 
    events notes:
    select element, addEventListener(), what event, what to do
    btn.addEventListener('what event',call back function)
*/
/* 
    const btn = document.querySelector('.btn');
    const heading = document.querySelector('h2');
    btn.addEventListener('click',function(){
        // console.log('You clicked me');
        heading.classList.add('title')
    }) 
*/
/* 
    // Function reference
    const btn = document.querySelector('.btn');
    const heading = document.querySelector('h2');
    function changeColor(){
        // console.log('hello');
        let hasClass = heading.classList.contains('title');
        if(hasClass){
            heading.classList.remove('title');
        }
        else{
            heading.classList.add('title');
        }
    }
    btn.addEventListener('click',changeColor)
*/


// Mouse Events
/* 
    click - fires after full action occurs
    mousedown - button is pressed
    mouseUp - button is released
    mouseenter - moved onto an element
    mouseleave - moved out of an element

    const heading = document.querySelector('h2');
    const btn = document.querySelector('.btn');
    
    btn.addEventListener('click',function(){
        console.log('Clicked me');
    })
    btn.addEventListener('mousedown',function(){
        console.log('Clicked me Down');
    })
    btn.addEventListener('mouseup',function(){
        console.log('Clicked me Up');
    })
    heading.addEventListener('mouseenter',function(){
        heading.classList.add('blue')
    })
    heading.addEventListener('mouseleave',function(){
        heading.classList.remove('blue')
    })
*/

/* 
    keypress - when key is pressed
    keydown - when key is down
    keyup - when key is released
    const nameInput = document.getElementById('name');

    nameInput.addEventListener('keypress',function(){
        console.log('You pressed a key');
    })
    nameInput.addEventListener('keydown',function(){
        console.log('You pressed a key');
    })
    nameInput.addEventListener('keyup',function(){
        console.log(nameInput.value);
    })
*/

/* 
    // event object argument e, evt
    // info about triggered event
    // event.type
    // event.currentTarget 
    // this keyword 
    //  preventDefault() - prevents defaults behaviour

    const heading = document.querySelector('h2');
    const btn = document.querySelector('.btn');
    const link = document.getElementById('link');

    heading.addEventListener('click', function(event){
        // heading.classList.add('blue');
        event.currentTarget.classList.add('title')
    })
    function someFun(e){
        e.preventDefault();
    }
    link.addEventListener('click', someFun); 
*/

/*  

    // currentTarget, target
    const btns = document.querySelectorAll('.btn');

    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            // console.log(e.currentTarget);
            // e.currentTarget.style.color = 'green'
            console.log('target', e.target);
            e.target.style.color = 'blue'
        })
    })

*/
/* 
    // event propagation - bubbling - capturing
    // allows select dynamic elements
    // event propagation - order the events are fired
    // event bubbling - clicked element first then bubbles up -- default
    // event capturing - fires at the root and fires until reaches target
    const container = document.querySelector('.container');
    const list = document.querySelector('.list-items');
    
    function showBubbling(e){
        console.log('current target', e.currentTarget);
        console.log('target', e.target);
        if(e.target.classList.contains('link')){
            console.log('link');
        }
    }
    function stopPropagation(e){
        console.log('sahara');
        e.stopPropagation();
    }
    list.addEventListener('click', stopPropagation)
    list.addEventListener('click', showBubbling,{capture : true})
    container.addEventListener('click', showBubbling,{capture : true})
    document.addEventListener('click', showBubbling,{capture : true})
    window.addEventListener('click', showBubbling,{capture : true})

*/

// Event propagation example
/* 

    const container = document.querySelector('.container')
    const btn = document.querySelector('.btn')
    // const heading = document.querySelector('.heading')
    // console.log(heading);

    function sayHello(){
        console.log('Hi');
    }
    btn.addEventListener('click', function(){
        const element = document.createElement('h1');
        element.classList.add('heading');
        element.textContent = `I am Sahara`;
        container.appendChild(element);
    })

    container.addEventListener('click', function(e){
        if(e.target.classList.contains('heading')){
            console.log('hi');
        }
    })
    // heading.addEventListener('click', sayHello)
*/
