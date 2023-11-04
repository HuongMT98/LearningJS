/*
            DOM EVENT

    1:Attribute Events
    2:Assign Event using the element node
*/
let inputValue

let h1Element = document.querySelector('.dom-event button')

h1Element.onclick = function (e) {
    alert('Hello World')
}


let inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function (e) {
    inputValue = e.target.value
}


inputElement.oninput = function (e) {
    inputValue = e.target.value
}


