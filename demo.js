// // console.log(document.URL);
// // console.log(document.title);
// // document.title=123;
// // console.log(document.title);
// // console.log(document.all);
// // console.log(document.all[12]);
// // console.log(document.forms);
// // console.log(document.body);
// // console.log(document.head);




// // var items = document.getElementsByTagName('li')

// // items[4].style.backgroundColor ='orange';

// var header=document.querySelector("#main-header");
// header.getElementsByClassName.borderBottom='solid 4px #ccc';

// //for input
// var input = document.querySelector('input');
// input.value='enter your item details';
// //for changing the submit button
// var submit= document.querySelector('input[type="submit"]');
// submit.value='Enter';

// // changing the item color
// var item=document.querySelector('.list-group-item');
// item.style.color='red'

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='blue'
// thirdItem.style.display='none'
// // queryselectorAll

// var titles=document.querySelectorAll('.title');
// console.log(titles)

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for (var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='green';   

// }

// var secondItem=document.querySelectorAll('.list-group-item');
// secondItem[1].style.color='green'


// //item list
 var itemlist=document.querySelector('#items');
console.log(itemlist);
//parentelemt
console.log(itemlist.parentNode);
console.log(itemlist.parentElement);
//lastelmentchild

console.log(itemlist.lastElementChild);
//lastchild
console.log(itemlist.lastChild);
itemlist.lastElementChild.style.backgroundColor='red'
// first child
console.log(itemlist.firstChild);
//first elementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello';
//nextsibling
console.log(itemlist.nextSibling);
//next element sibling
console.log(itemlist.nextElementSibling);
// previous sibling
console.log(itemlist.previousSibling);
//previouselemntsibling 
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';
//createelement
var newDiv=document.createElement('div');

//adding class to new div
newDiv.classname='Hello';
//adding id
newDiv.id='hi';
//adding attribut
newDiv.setAttribute('title', 'Hi there');

// //create text node

var newDivText=document.createTextNode("Hello");
//adding text to div
newDiv.appendChild(newDivText);

//inserting in to dom
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize= '30px'



var abc=document.querySelector('body .title1');
var a=document.querySelector('body h');
console.log(newDiv);
abc.insertBefore(newDiv, a);
