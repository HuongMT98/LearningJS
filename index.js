//! ------------------------
// ! Gán tên Biến
// var hoTen = 'Mai Thanh Hưởng'
// alert(hoTen)

//! ------------------------
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

//! ------------------------
// ! If - Else : Điều kiện nếu thì
// var a = 3 + 6
// if (a < 2) {
//     alert('Điều kiện đúng')
// } else {
//     alert('Điều kiện sai')
// }

//! ------------------------
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

//! ------------------------
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

// var a = 1
// console.log((typeof a));
// console.log((typeof 'a'))

//! ------------------------
// ! toán tử so sánh kiểu dữ liệu và giá trị
//* So sánh giá trị tuyệt đối
// var a = 1
// var b = 2
// console.log((a === b));

//* So sánh giá trị
// var a = 3
// var b = 5
// console.log((a !== b));

//! ------------------------
//! Chuỗi
//* 1: tạo chuỗi
// var fullname = 'Thanh Hưởng'
// var age = '25'
// console.log(fullname + age)

// * 2:Xem độ dài chuỗi
// var fullname = 'Thanh Hưởng'
// var age = '25'
// console.log(fullname.length + age.length)

// * 3: Dùng dấu \ để hiển thị '' hoặc "" hoặc \ trong chuỗi
// var str = "\'\"\\hello world\\" // output là \'\"\hello world\'
// console.log("str:", str);

//! ------------------------
//! Làm việc với chuỗi
// *1 length : Độ dài chuỗi
// var name = "thanhhuong";
// console.log('Độ dài chuỗi của ' + name + ' là ' + name.length + '.');

// *2 findindex : Tìm ký tự trong chuỗi trong chuỗi
// var text = "Thanh Huong";
// let index = text.indexOf("u");   // Output: 0 (với ký tự u xuất hiện lần đầu tiên).
// if (index !== -1) {                  // Nếu không gặp, in ra
//     console.log(`Từ vựng 'u' được tìm thấy ở vị trí ${index}.`);
// }

// *3 Cut string : Cắt chuỗi
// const myString = "<NAME>";
// console.log(`${myString}`);
// console.log(`${myString}`.slice(4))    // cắt chuỗi vị trí 4
// console.log(`${myString}`.substring(6, -7))

// *4 Replace ghi đè chuỗi
// var a = 'Hoc JS tai F8'
// console.log(a.replace('JS', 'Javascript'))
// ? --> Thay thế JS thành Javascript

// var a = 'Hoc JS JS JS tai F8'
// console.log(a.replace(/JS/g, 'Javascript'))
// ? --> Thay thế toàn bộ JS thành Javascript

// *5 Convert uppercase thành chữ hoa
// var a = 'Hoc JS JS JS tai F8'
// console.log(a.toUpperCase())

// *6 Convert to lowercase thành chữ thường
// var a = 'Hoc JS JS JS tai F8'
// console.log(a.toLowerCase());

// *7 Strim Cắt bỏ khoảng trắng thừa 2 đầu
// var str = ' Hoc Js ';
// console.log(str);           // output: " Hoc Js "
// console.log(str.trim());      // output: "HocJs"

// *8 Split cắt chuỗi
// var traiCay = 'Apple';
// console.log(traiCay.split(''))

//! ------------------------
//! Kiểu số Number và làm việc với kiểu số Number
// * 1 Kiểu To String : biến kiểu số Number thành chuỗi String
// var age = 24;
// var PI = 3.14

// var myString = PI.toString()
// console.log(myString)

// *2 Kiểu to Fixed : Làm tròn số
// var pi = 3.14343434
// console.log(pi.toFixed())

//! ------------------------
//! Mảng: Array
// *1 : Tạo mảng
// var fruits = [
//     'apple',
//     'banana',
//     'orange'
// ];
// console.log("Mảng Fruits:", fruits);

// *2 : Truy xuất mảng
// console.log(fruits[0])     // lấy ra phần tử đầu tiên
// console.log(fruits[2])      // lấy ra phần tử cuối cùng


//  *3 : Thêm vào Mảng
// fruits.push('grape')   // thêm item vô cuối của array
// console.log("Push grape", fruits);

// *4 Xóa khỏi mảng
// fruits.pop();    // Xóa phần tử cuối cùng
// console.log("Xóa phần tử cuối cùng trong mảnh ", fruits);

// *5 Cắt mảng Array
// let arr = ['one', 'two', 'three'];
// arr.splice(1, 1)
// console.log(arr)

// *6 Xóa phần tử đầu mảng Shift
// let myArray = ['Nigga', "Hello World!", 'WOW'];
// console.log(myArray.shift())
// console.log(myArray)

// *7 Thêm phần tử đầu mảng Array unShift
// let newArr = ["apple", "banana"];
// console.log(newArr)
// newArr.unshift("orange"); ---> thêm orange vào mảng
// console.log(`Unshift: ${JSON.stringify(newArr)}`);
// console.log(newArr)

// *8 Xóa phần tử trong mảng Splice
// let numbers = [20, 30, 40];
// numbers.splice(1, 1);   // xóa số 30 ra và chỉ 1 số (1,1)
// console.log('Splice:', JSON.stringify(numbers));

// *9 Nối 2 mảng thành 1 mảng
// let arrayOne = [1, 2, 3],
//     arrayTwo = [4, 5, 6]
// console.log([arrayOne, arrayTwo])
// console.log(...[...arrayOne, ...arrayTwo]);

// *10 Slicing array
// let fruits = ["Banana", "Orange", "Mango", "Apple", "Green Apple"]
// console.log(fruits.slice(1)) // ---> Bắt đầu cắt mảng từ vị trí chỉ định


//! ------------------------
//! Hàm : Funtion là một khối mã chức năng và không tự chạy đến khi được gọi
// *1 Tạo hàm Funtion
// function sayHello() {
//     return 'hello world';
// }
// console.log(sayHello())

// //✨✨✨✨✨✨✨✨✨✨✨
// function showDiablog() {
//     alert('Hello world')
// }
// showDiablog() //---> Chỉ đến khi gọi mới thực thi

// *2 Tham số trong hàm Funtion
// function writeLof(message) {
//     console.log(message)
// }
// writeLof('Tham số thứ 1')

// //✨✨✨✨✨✨✨✨✨✨✨
// function writeLof(message, message1) {
//     if (message) {
//         console.log(message)
//     } if (message1) {
//         console.log(message1)
//     }
// }
// writeLof('Đây là tham số thứ 1', 'Đây là tham số thứ 2')


// *3 Return trong Funtion
// var isComfirm = confirm('Bạn đủ tuổi chưa?')
// console.log(isComfirm)

// //✨✨✨✨✨✨✨✨✨✨✨
// function phepCong(a, b) {
//     return a + b; // ---> Bên dưới hàm return sẽ bị bỏ qua
// }
// var result = phepCong(2, 8)
// console.log(result)









































