// console.dir(document)
/* 
// get element by tagname

    const heading = document.getElementsByTagName('h1');
    heading[0].style.color = 'red'
    console.log(heading.length);

    const heading2 = document.getElementsByTagName('h2');
    heading2[0].style.color = 'brown';

    const items = document.getElementsByTagName('li');
    items[2].style.color = 'yellow'
    const betterItems = [...items];

    betterItems.forEach(function(item){
        console.log(item);
    })
    console.log(items);
    console.log(betterItems);
 */

/* 
// get element by Class Name
    const listItems = document.getElementsByClassName('special')
    listItems[2].style.color = 'red'
    console.log(listItems); 
*/

/* // Query Selector & Query Selector All
    const result = document.querySelector('#result');
    result.style.backgroundColor = '#DCDCDC';

    const lastItem = document.querySelector('li:last-child')
    lastItem.style.color = 'blue'
    console.log(lastItem);


    const list = document.querySelectorAll('.special');
    list.forEach(function (item) {
    console.log(item);
    item.style.color = 'blue';
    });
 */

/* // Navigate the DOM - Children
    const result = document.querySelector('#result');
    const allChildren = result.childNodes;
    // console.log(allChildren);

    const children = result.children;
    console.log(children);
    console.log(result.firstChild);
    console.log(result.lastChild);
 */

/* // Navigate the DOM - parentElement
    const heading = document.querySelector('h2');
    const parent = heading.parentElement;
    parent.style.color = 'blue';
*/
/*
 // Navigate the DOM - nextSibling, previousSibling
    const first = document.querySelector('.first');
    const second = (first.nextSibling.nextSibling.style.color = 'red');
    console.log(second);

    const last = document.querySelector('#last');
    const third = last.previousSibling.previousSibling;
    console.log(third); 
*/

/* 
// Navigate the DOM - nextElementSibling, previousElementSibling
    const first = document.querySelector('.first');
    const second = (first.nextElementSibling.style.color = 'red');
    console.log(second);

    const last = document.querySelector('#last');
    const third = last.previousElementSibling.style.color = 'blue';
    console.log(third); 
*/

/* 
    // textContent, nodeValue
    const item = document.getElementById('special');
    const value = item.firstChild.nodeValue;
    // console.log(item.childNodes[0].nodeValue);
    // console.log(item.firstChild.nodeValue);
    
    const textContent = item.textContent;
    console.log(textContent);
*/
/* 
// getAttribute(); setAttribute(); 
    const first = document.querySelector('.first');
    const idValue = first.getAttribute('id');
    // console.log(idValue);
    const link = document.getElementById('link');
    const showLink = link.getAttribute('href');
    // console.log(showLink);
    const last = link.nextElementSibling;
    last.setAttribute('class','first');
    last.textContent = 'I also have an attribute';
    console.log(last);
    const links = document.querySelectorAll('.first');
    console.log(links);
*/
/* 
// className & classList

    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    const classValue = first.className;
    second.className = 'color text';

    third.classList.add('color');
    third.classList.add('text');
    // or
    third.classList.add('text', 'color');
    third.classList.remove('color')
    let result = third.classList.contains('color');
    if (result) {
        onsole.log('exist');
    } else {
        console.log('no class');
    }

    const classValue = third.classList;
    console.log(classValue);
*/

/* 
    // createElement , createTextNode, appendChild
    
    // createElement('element')
    // createTextNode('text content)
    // element.appendChild(childElement)
    // insertBefore('element','location');
    // replaceChild('new','old')
    const result = document.querySelector('#result');
    // insertBefore
    const first = document.querySelector('.red');
    
    // create empty element
    const bodyDiv = document.createElement('div');
    // create text node
    const text = document.createTextNode('A simple body div')
    
    bodyDiv.appendChild(text);
    // document.body.appendChild(bodyDiv);
    document.body.insertBefore(bodyDiv, result); // insertBefore
    const heading = document.createElement('h2');
    const headingText = document.createTextNode('Dynamic Heading');
    
    heading.appendChild(headingText);
    heading.classList.add('blue');
    result.insertBefore(heading,first); // insertBefore
    // result.appendChild(heading);
    const smallHeading = document.createElement('h6');
    const smallText = document.createTextNode('I am small heading text');
    smallHeading.classList.add('red');
    smallHeading.appendChild(smallText);
    document.body.replaceChild(smallHeading,bodyDiv);
    console.log(result.children);
*/

/* 
    prepend , innerText
    const heading = document.createElement('h2');
    heading.innerText = `I am a dynamic heading`
    document.body.prepend(heading);
*/
/* 
    remove, removeChild
    const result = document.querySelector('#result');
    // result.remove();
    const heading = result.querySelector('h1');
    result.removeChild(heading);
    console.log(heading);
*/
/* 
    // innerHTML, textContent
    const list = document.getElementById('first');
    const div = document.getElementById('second');
    const item = document.querySelector('.item');
    console.log(div.textContent); // returns only text in the variable
    console.log(list.innerHTML); // returns all the HTML in the variable
    console.log(list.textContent); // returns all the element in the list
    
    const randomVar = 'Sahara';
    const ul = document.createElement('ul');
    ul.innerHTML = `<li class="item">List item</li>
    <li>List item</li> <li>${randomVar}</li>`
    document.body.appendChild(ul);
    
    div.textContent = 'Prianka'
*/
/* 
    // CSS
    const random = document.querySelector('.random');
    // console.log(random.style);
    random.classList.add('title'); 
*/

