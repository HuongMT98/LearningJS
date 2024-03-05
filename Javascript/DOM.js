//1 Classlist
function clickToggle() {
    let isShow = document.querySelector('.list-girl')
    isShow.classList.toggle('girl')
}




//2 Lấy giá trị người dùng
let inputP = document.querySelector('.inputp')
let inputEle = document.querySelector('.input-user')
inputEle.oninput = function (e) {
    inputP.innerHTML = `Người dùng nhập: ${e.target.value}`;
    if (e.target.value === '') {
        inputP.innerHTML = "Vui lòng nhập trường này"
    }
}


let checkP = document.querySelector('.checkp')
let checkEle = document.querySelector('input[type="checkbox"]')
checkEle.onchange = function (e) {
    checkP.innerHTML = `Người dùng tick: ${e.target.checked}`
    if (e.target.checked === true) {
        checkP.innerHTML = 'Người dùng check có'
    } else {
        checkP.innerHTML = 'Người dùng check không'
    }
}


let selectP = document.querySelector('.selectp');
let selectEle = document.querySelector('select');

selectEle.onchange = function (e) {
    selectP.innerHTML = `Người dùng chọn: ${e.target.value}`;

};





//3 Ngăn chặn hành vi mặc định của thẻ a không phải youtube
let aElement = document.links
for (let i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (e) {
        if (!e.target.href.startsWith('http://youtube.com')) {
            e.preventDefault()
        }
    }

}

//3 Ngăn chặn hành vi mặc định
let pPre = document.querySelector('.p-pre')
let ulPre = document.querySelector('.ul-pre')
ulPre.onmousedown = function (e) {
    e.preventDefault()
}
ulPre.onclick = function (e) {
    pPre.innerHTML = `User choice: ${e.target.innerText}`
}




//4: Sự kiện nổi bọt
let sKnb = document.querySelector('.sknb')
let btnSknb = document.querySelector('.btnsknb')
let pSknb = document.querySelector('.psknb')

sKnb.onclick = function (e) {
    pSknb.innerHTML = 'DIV'

}
btnSknb.onclick = function (e) {
    pSknb.innerHTML = 'Click Me!'
    e.stopPropagation()

}


