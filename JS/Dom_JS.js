/*       
                        Tài liệu DOM: https://www.w3schools.com/js/js_htmldom.asp

                        DOM chỉ có 3 thành phần:
                        Element
                        Atribute
                        Text
*/



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// 1: Element: id, class, tag, css selector, html colection


let getClassName1 = document.getElementsByClassName('title')
console.log(getClassName1)

let getID1 = document.getElementById("dom")
console.log(getID1)

let getTagName1 = document.getElementsByTagName('h3')
console.log(getTagName1)

let cssSelector1 = document.querySelector('.title')
console.log(cssSelector1)

let cssSelector2 = document.querySelectorAll('class-test2')
console.log(cssSelector2)

console.log(document.forms)

let listItemNodes = document.querySelector('.box1')
console.log(listItemNodes.querySelectorAll('li'))




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// 2: DOM Atribute

let h1Attribute = document.getElementsByClassName('dom-attribute')
h1Attribute.title = 'heading'
h1Attribute.id = 'heading'
h1Attribute.className = 'heading'
h1Attribute[0].setAttribute('style', 'color:red; font-size:48px;')
console.log(h1Attribute)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// 3: InnerHTML

let headingInner = document.querySelector('.text-innerdom')
headingInner.innerHTML = '<h1>New Heading</h1>'




let button = document.getElementById('myButton');
button.addEventListener('click', function () {
    let anNut = document.querySelector('.changebutton');
    anNut.textContent = 'Bạn đã ấn nút';
});



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// 4: DOM CSS

let boxElement = document.querySelector('.box')

Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'red'
})




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// 5: ClassList Property:     add,contains,remove,toggle

let boxElement1 = document.querySelector('.classlisttest')


// ADD: Thêm    classList.add
boxElement.classList.add('red')


setInterval(() => {
    boxElement1.classList.toggle('red')
}, 1000)