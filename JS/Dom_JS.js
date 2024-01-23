//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//! 1: HTML DOM
/**
1: Element: ID, class,tag,CSS selector, HTML collection
2: Attribute
3: Text
*/
//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//?     Node Element

// let headingNode = document.getElementById('heading')
// console.log(headingNode)



// let headingNodes = document.getElementsByClassName('headingp1')
// console.log(headingNodes)



// let headingNodeCSS = document.querySelector('.box-heading .headingp1')
// console.log(headingNodeCSS)



// let headingNodeCSSs = document.querySelectorAll('.headingp')
// console.log(headingNodeCSSs)



// let listItemNodes = document.querySelectorAll('.box-1')
// console.log(listItemNodes)





//? ∅∅∅∅∅∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∅∅∅∅∅
//?     Node Attribute

// let headingElement = document.querySelector('h1')

// headingElement.title = 'Heading'
// headingElement.className = 'heading-className'





//? ∅∅∅∅∅∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∅∅∅∅∅
//?     Node Text : innerText, textContent, innerHTML, outerHTML

// let headingTextNode = document.querySelector('.text-node')

//* //  innerText
// console.log(headingTextNode.innerText)

//* //  textContent
// console.log(headingTextNode.textContent)
// //!----> Lấy ra chữ

// headingTextNode.innerHTML = "New text node"
// //!----> Thay chữ



//*  innerHTML
// let boxElement = document.querySelector('.box-inner')
// boxElement.innerHTML = '<h2 title="heading">New Inner HTML</h2>'

// console.log(document.querySelector('.box-inner').innerText)

// console.log(boxElement.innerHTML)






//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//! 2: ClassList Property
/**
        add : thêm class
        contains: kiểm tra class
        remove: xóa class
        toggle: có thì xóa, không có thì thêm
*/
//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️

let boxElement = document.querySelector('.box-inner')


// boxElement.classList.add('color-red')


// console.log('Có class red hay không:', boxElement.classList.contains('color-red'))


setTimeout(() => {
    boxElement.classList.toggle('color-red')
}, 1000); //! ==> Xóa classList sau 2s
setInterval(() => {
    boxElement.classList.toggle('color-blue')
}, 1000);









//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//! 3: DOM EVENT
/**
        1: Attribute Events
        2: Assign Event
        3: preventDefault   
        4: stopPropagation
*/
//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️

//*             Attribute Events

let h2DomEvent = document.querySelectorAll('.dom-events')

for (let i = 0; i < h2DomEvent.length; i++) {
    h2DomEvent[i].onclick = function (e) {
        console.log(e.target.innerHTML)
    }
} //! ==> Khi click vào h2 nào thì sẽ chọn h2 đó



//? Ví dụ lấy giá trị khi người dùng chọn

let inputV
let inputE = document.querySelector('input[type="text"]')

inputE.onchange = function (e) {
    inputV = e.target.value //--> Tạo biến lưu giá trị
    console.log("Onchange:", e.target.value)
} //---> Lấy value từ nhập

inputE.oninput = function (e) {
    inputV = e.target.value //--> Tạo biến lưu giá trị
    console.log("On Input:", e.target.value)
} //--> Lấy value trong khi gõ




let checkV
let checkE = document.querySelector('input[type="checkbox"]')
checkE.onchange = function (e) {
    checkV = e.target.checked
    console.log("Đã check chưa:", e.target.checked)
}



let selectV
let selectE = document.querySelector('select')
selectE.onchange = function (e) {
    selectV = e.target.value
    console.log(e.target.value)
}






//*             Assign Event onkeyup, onkeydown,

let inputEKeyUp = document.querySelector('input[type="text"]')
inputEKeyUp.onkeyup = function (e) {
    switch (e.which) {
        case 27:
            console.log('Bấm ESC là thoát')
            break;
        case 13:
            console.log('Bấm Enter là gửi')
            break;
    }
}




//*             PreventDefault Hành vi mặc định JS

//? VD

let preDefault = document.querySelectorAll('.test-a')
for (let i = 0; i < preDefault.length; i++) {
    preDefault[i].onlick = function (e) {
        if (e.target.href.startsWith('https://www.youtube.com/')) {
            e.preventDefault()
        }
    }

}



//? VD Click vào input lấy giá trị có sẳn

let ulElement = document.querySelector('.ul-domre')

ulElement.onmousedown = function (e) {
    e.preventDefault()
} //! --> Ngăn chặn hành vi mặc định trước khi nhất chuột lên

ulElement.onclick = function (e) {
    console.log(e.target.innerHTML)
}   //! --> Tạo Dom event lấy giá trị của click





//*             stopPropagation : Dừng sự kiện nổi bọt

document.querySelector('.h1-burble-e').onclick = function () {
    console.log('DIV')
}


document.querySelector('.button-burble-e').onclick = function (e) {
    e.stopPropagation()
    console.log('Click Me!')
}






