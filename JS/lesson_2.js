////!_______>>> Nội dung có trong bài này:
/*
⁡⁣⁣⁢       KIỂU DỮ LIỆU BOOLEAN
       CÂU LỆNH ĐIỀU KIỆN IF
       TOÁN TỬ LOGICAL && ! ||
       KIỂU DỮ LIỆU
       HỌC VỀ HÀM FUNCTION⁡
*/
////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧










////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! KIỂU DỮ LIỆU BOOLEAN
// let isSucces = true
// console.log(isSucces)



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! CÂU LỆNH ĐIỀU KIỆN IF
// let a = 10, b = 5

// if (a > b) {
//     console.log("Điều kiện đúng")
// } else {
//     console.log('Điều kiện sai')
// }


// let c = 2, d = 5, e = 4
// let f = c + d + e

// if (f > 10) {
//     console.log("f có lớn hơn 10")
// } else {
//     console.log("f nhỏ hơn 10")
// }



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! TOÁN TỬ LOGICAL && ! ||
//  ⁡⁢⁣⁢Toán tử &&⁡ ⁡⁣⁢⁣Chỉ cần 1 điều kiện sai thì cả điều kiện sai⁡

// let a = 1, b = 2, c = 3
// if (a > 0 && b < c && c > a) {
//     console.log('True')
// } else {
//     console.log('False')
// }



//  ⁡⁢⁣⁢Toán tử ||⁡ ⁡⁣⁡⁣⁢⁣Chỉ cần 1 điều kiện dúng thì cả bài toán đúng

// let a = 1, b = 2, c = 3
// if (a < b || b < c) {
//        console.log(true)
// }



//  ⁡⁢⁣⁢Toán tử phủ định ! ⁡⁣⁢⁣Phủ định lại kết quả⁡

// let g = 1, h = 2
// if (!(g > h)) {
//     console.log("Điều kiện đúng")
// }



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! KIỂU DỮ LIỆU
//⁡⁢⁣   ⁡⁢⁣⁢Kiểu dữ liệu nguyên thủy⁡
/*
⁡⁣⁣⁢Number
String
Boolean
Undefined
Null
Symbol⁡
*/


// var number = 1
// console.log(number);

// var string = "Hưởng"
// console.log(string)

// var boolean = true
// console.log(boolean);

// var undefined = ''
// console.log(undefined);

// var isnull = null;
// console.log(isnull)

// var symbol = Symbol('symbol')
// console.log(symbol)



//  ⁡⁢⁣⁢Kiểu dữ liệu phức tạp⁡
/*
⁡⁣⁣⁢Funtion : ⁡⁣⁢⁣Không được chạy đến khi được gọi⁡
⁡⁣⁣⁢Object⁡  : ⁡⁣⁢⁣Chứa dữ liệu⁡
*/



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//     ⁡⁢⁣⁢Funtion⁡ : ⁡⁣⁢⁣Hàm hoặc phương thức⁡

// var func = function () {
//     setInterval(() => {
//         console.log('Xin chào thế giới')
//     }, 2000);
// }
// func()

////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//     ⁡⁢⁣⁢Object⁡ : ⁡⁣⁢⁣Đối tượng⁡

// var myObject = {
//     name: 'Nguyen',
//     age: 20,
// }
// console.log("Tên người dùng: " + myObject.name)
// console.log("Tuổi người dùng: " + myObject.age)



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! HỌC VỀ HÀM FUNCTION: Nó không tự thực thi và chỉ được thực hiện khi được gọi
////✨✨✨✨✨✨✨✨
// ⁡⁢⁣⁢Tạo hàm:⁡
// var name = "Hưởng", age = 25, adress = "Kiên Giang";

// function firstFunction() {
//     console.log("Xin chào người dùng tên: " + name + " tuổi: " + age + " địa chỉ: " + adress)
// }
// firstFunction()



// ⁡⁢⁢⁣Ví dụ khác⁡

// function words() {
//     setTimeout(() => {
//         console.log("H")
//     }, 1000);
//     setTimeout(() => {
//         console.log("Ư")
//     }, 2000);
//     setTimeout(() => {
//         console.log("Ở")
//     }, 3000);
//     setTimeout(() => {
//         console.log("N")
//     }, 4000);
//     setTimeout(() => {
//         "G"
//     }, 5000);
//     setTimeout(() => {
//         console.log("HƯỞNG")
//     }, 6000);
// }
// words();



//  ⁡⁣⁢⁣⁡⁢⁣⁢Tham số trong hàm⁡ ⁡⁣⁣⁢(Param of function)⁡
//  Tham số là 1 giá trị được truyền trong hàm
// function writeLog(text) {
//     /* writeLog là 1 function, text là tham số, tham số không giới hạn kiểu dữ liệu */
//     console.log(text)
// }
// writeLog("Đây là 1 dòng code")



// ⁡⁣⁢⁡⁢⁣⁢Return trong hàm⁡ ⁡⁣⁣⁢(Return of function)⁡
// function cong(a, b) {
//     return a + b
//     /*Code bên dưới return sẽ không chạy*/
// }
// var result = cong(2, 8)
// console.log(result)




// ⁡⁣⁢⁡⁢⁣⁢Các loại hàm Function⁡⁡
// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Declaration function⁡ ⁡⁣⁢⁣bắt buộc phải đặt tên và không tự chạy khi chưa gọi⁡⁡
// ⁡⁢⁢⁣Ví dụ⁡
// function showMessage() {
//     console.log("Declaration function")
// }
// showMessage()



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Expression function⁡ ⁡⁣⁢⁣được gán cho một biến và không tự chạy khi chưa gọi⁡
// ⁡⁢⁢⁣VD: 1⁡
// let showMessage1 = function () {
//     console.log("Expression function")
// }
// showMessage1()



// ⁡⁢⁢⁣VD: 2⁡
// let myObject = {
//     myFunction: function testName() {

//     }
// }