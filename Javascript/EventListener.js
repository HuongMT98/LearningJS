let eventBtn = document.querySelector('.event-btn')
let eventP = document.querySelector('.event-p')
eventBtn.addEventListener('click', () => {
    const number1 = parseFloat(prompt("Enter the first number:"));
    const number2 = parseFloat(prompt("Enter the second number:"));

    function sum(a, b) {
        return a + b;
    }

    const result = sum(number1, number2);
    eventP.innerHTML = `Kết quả tổng là: ${result} `
})
