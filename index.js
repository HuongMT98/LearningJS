// ! Gán tên Biến
// var hoTen = 'Mai Thanh Hưởng'
// alert(hoTen)

// ! Hàm Build-in funtion
// * 1. alert: tạo ra pop-up cảnh báo người dùng
// alert('Chào cậu')

// * 2.Console : In dòng hông báo trên tag console trên trình duyệt
// console.log
// console.error
// console.warn

// * 3. Confirm :Tạo ra pop-up xác nhận người dùng
// confirm('Xác nhận bạn là người đăng nhập')

// * 4. Prompt : tạo ra pop-up cho người dùng nhập vào
// prompt('Xác nhận bạn không phải robot, Hãy điền YES')

// * 5. Set timeout: Dùng truyền 1 funtion và thời gian delay để chạy sau này, đơn vị mili giây
// setTimeout(function () {
// alert('Thông Báo, bạn đã truy cập vào website của chúng tôi')
// }, 3000)

// * 6. setInterval dùng để truyền 1 funtion vào sẽ được lặp lại sau một khoảng thời gian đơn vị milli giây
// setInterval(function () {
//     console.log('Đây là số:' + Math.random)
// }, 2000)


// ! If - Else : Điều kiện nếu thì
// var a = 3 + 6
// if (a < 2) {
//     alert('Điều kiện đúng')
// } else {
//     alert('Điều kiện sai')
// }

// ! Toán tử Logic
// * 1: && và và, đây là toán tử bắt buộc mọi điều kiện phải đúng thì mới đúng
// var a = 1
// var b = 2
// if (a > 0 && b > 0) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }

// * 2: || toán tử hoặc, chỉ cần 1 trong nhiều điều kiện đúng thì sẽ đúng
// var a = 1
// var b = 2
// if (a > 0 || b > 0) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }

// * 3: ! Toán tử NOT, đây là toán tủ phủ định lại kết quả
// var a = 1
// var b = 2
// if (!(a > 0 && b > 0)) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }

// ! Kiểu dữ liệu trong JS
// * 1: Number: Số học có thể là số âm hay dương, số thực với các chấm, không nhất thiết phải có dấu.
// var a = 1
// var b = 2
// var c = 3

// * 2: String : Kiểu chuỗi, được chứa trong '' hoặc ""
// var ten = 'Hưởng'
// var ho = 'Mai'
// var tuoi = '25'

// *3 : Boolean thể hiện true or false
// var isName = true
// var ho = false

// *4 : Undefined : Không gán giá trị cho biến
// var age;

// *5:  Null Kiểu dữ liệu chả có gì
// var person = null

// *6:  Symbol: Tạo ra một symbol mới và assign cho biến
// var symA = Symbol('symA'); // unique identifier for the object created by this function call
// console.log(typeof symA);

// *7: Funtion  : Tạo ra 1 chức năng mà chỉ khi gọi mới thực hiện
// function sayHello() {
//     return "Chào các con vợ";
// }
// console.log("sayHello", typeof sayHello());

// *8: Object   : Kiểu Object thường xuyên sử dụng để lưu hàm
// const car = {
//     make: "Toyota", model: "Camry", year: 2021
// }
// console.log(car)

// *9: Array    : Giống Object
// let fruits = ["apple", "banana", "orange"]
// console.log(`Fruits ${fruits}`)

//  *10: Cách kiểm tra kiểu dữ liệu dùng typeof

var a = 1
console.log((typeof a));
console.log((typeof 'a'))

// ! toán tử so sánh kiểu dữ liệu và giá trị
//* So sánh giá trị tuyệt đối
// var a = 1
// var b = 2
// console.log((a === b));

//* So sánh giá trị
// var a = 3
// var b = 5
// console.log((a !== b));


//! Câu điều kiện và phép so sánh
//* 






