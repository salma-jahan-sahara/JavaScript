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