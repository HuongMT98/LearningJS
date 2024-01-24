//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//! 1: DOM EVENT
/**
        1: Event Listener
        2: JSON
        3: Fetch
        4: DOM location
        5: Local Storage
        6: Session Storage
        7: Coding Convention
        8: Best Practices
        9: Mistakes
        10: Performance
*/
//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️             Event Listener





//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
//! Event Listener
//⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️

let btn = document.getElementById('btn-event')

function viec1() {
    console.log('Việc 1')
}

function viec2() {
    console.log('Việc 2')
}



btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)


setTimeout(() => {
    btn.removeEventListener('click', viec1)
}, 3000);    //! --> Sau 3 giây không thể event-listener việc 1






