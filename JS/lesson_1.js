////!_______>>> Nội dung có trong bài này
// ⁡⁣⁣⁢KHAI BÁO BIẾN⁡
// ⁡⁣⁣⁢THUẬT NGỮ BUILD-IN  : Hàm có sẳn trong JS ( Alert / Console / Confirm / Promt / Set timeout / Set Interval)⁡
// ⁡⁣⁣⁢TOÁN TỬ  (Số học + - * / % ** ++ --) (Toán tử gán = += -= *= /= **= ) (Toán tử so sánh == != > < >= <= === !==)⁡
////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧











////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! KHAI BÁO BIẾN
/*
⁡⁣⁢⁣--- Let: khởi tạo một biến cục bộ, chỉ được sử dụng bên trong khối lệnh nơi nó được khởi tạo và không được ghi đè
--- Var: Khởi tạo biến toàn cục, có thể sử dụng trước khi khởi tạo và có thể ghi đè biến var khác
⁡⁣⁢⁣--- Const: Là một hằng số, không thể thay đổi giá trị⁡⁡⁡
*/

// var fullName = 'Mai Thanh Hưởng'
// var age = 25
// console.log(fullName + ', tuổi: ' + age)






////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////!   THUẬT NGỮ BUILD-IN  : Hàm có sẳn trong JS
/*
    1:  ⁡⁢⁣⁢Alert   ⁡:⁡⁣⁢⁣hiển thi pop-up trên màn hình⁡
    2:  ⁡⁢⁣⁢Console⁡    : ⁡⁣⁢⁣Dùng để làm việc với cửa sổ console⁡
    3:  ⁡⁢⁣⁢Confirm⁡    : ⁡⁣⁢⁣Dùng để tạo ra pop-up xác nhận từ người dùng⁡
    4:  ⁡⁢⁣⁢Promt⁡  : ⁡⁣⁢⁣Dùng để lấy giá trị người dùng nhập từ pop-up⁡
    5:  ⁡⁢⁣⁢Set timeout⁡    : ⁡⁣⁢⁣Dùng để thực hiện trong khoảng thời gian⁡
    6   ⁡⁢⁣⁢Set Interval⁡   : ⁡⁢⁢⁢⁡⁣⁢⁣Dùng để thực hiện trong khoản thời gian và liên tục⁡⁡
*/



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Alert⁡:  ⁡⁣⁢⁡⁣⁢⁣Hiển thi pop-up trên màn hình⁡⁡
// alert("Test hàm alert")



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢Confirm⁡: ⁡⁣⁢⁣Dùng để tạo ra pop-up xác nhận từ người dùng⁡
// confirm('Xác nhận bạn đủ tuổi')



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢Promt⁡:   ⁡⁣⁢⁣Dùng để lấy giá trị người dùng nhập từ pop-up⁡
// prompt("Nhập tuổi bạn để truy cập: ")



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢Settimeout⁡:  ⁡⁣⁢⁣Dùng để thực hiện trong khoảng thời gian⁡
// setTimeout(() => {
//     confirm('Test hàm setTimeout')
// }, 2000);



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢setInterval⁡: ⁡⁢⁢⁢⁡⁣⁢⁡⁣⁢⁣Dùng để thực hiện trong khoản thời gian và liên tục⁡
// setInterval(() => {
//     console.log('Test hàm Interval')
// }, 2000);



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////!   TOÁN TỬ
// ⁡⁢⁣⁢Toán tử số học⁡: ⁡⁣⁢⁣+ - * / % ** ++ --⁡



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Toán tử cộng⁡
// var a = 7
// var b = 2
// var c = a + b
// console.log("Toán tử cộng là: " + c)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Toán tử trừ⁡
// var a = 8
// var b = 5
// var c = a - b
// console.log("Toán tử trừ là: " + c)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Toán tử nhân⁡
// var a = 9;
// var b = 4;
// var c = a * b
// console.log("Toán tử nhân là: " + c)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Toán tử chia⁡
// var a = 16;
// var b = 3;
// var c = Math.floor(a / b)
// console.log("Toán tử chia là: " + c)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Lũy thừa⁡
// var a = 2
// var b = 5
// var c = a ** b
// console.log(`Lũy thừa của ${b} lần với ${c}`)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Chia lấy số dư⁡
// var a = 10
// var b = 3
// var c = a % b
// console.log("Chia lấy số dư: " + c)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁢Tăng 1 giá trị số⁡
// var a = 10
// a++
// console.log("Tăng 1 giá trị số: " + a)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁣⁡⁣⁣⁢Giảm 1 giá trị số⁡
// var a = 10
// a--
// console.log('Giảm 1 giá trị số:' + a);




// ⁡⁢⁣⁢Toán tử gán⁡ ⁡⁣⁢⁣= += -= *= /= **=⁡
// let a = 10
// console.log("Toán tử gán = : " + a)

// a += 8
// console.log("Toán tử gán += : " + a)

// a -= 7
// console.log("Toán tử gán -= : " + a)

// a *= 3
// console.log("Toán tử gán *= : " + a)

// a /= 9
// console.log("Toán tử gán /= : " + a)

// a **= 4
// console.log("Toán tử gán **=: " + a)




// ⁡⁢⁣⁢Toán tử nối chuỗi⁡: ⁡⁣⁢⁣Tring operator ⁡
// var ten = 'Thanh Hưởng'
// var ho = 'Mai'
// console.log("Toán tử nối chuỗi: " + ho + ' ' + ten)




//⁡⁢⁣⁢ Toán tử so sánh⁡ ⁡⁣⁢⁣== != > < >= <= === !==
//🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh ==    BẰNG⁡
// var a = 25
// var b = 5
// if (a == b) {
//     console.log('Điều kiện đúng ==')
// } else {
//     console.log('Điều kiện sai ==')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh !=    KHÔNG BẰNG⁡
// var a = 25
// var b = 5
// if (a != b) {
//     console.log('Điều kiện đúng !=')
// } else {
//     console.log('Điều kiện sai !=')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh >     LỚN HƠN⁡
// var a = 25
// var b = 5
// if (a > b) {
//     console.log('Điều kiện đúng >')
// } else {
//     console.log('Điều kiện sai >')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh <     NHỎ HƠN⁡
// var a = 25
// var b = 5
// if (a < b) {
//     console.log('Điều kiện đúng <')
// } else {
//     console.log('Điều kiện sai <')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh >=        LỚN HƠN HOẶC BẰNG⁡
// var a = 25
// var b = 5
// if (a >= b) {
//     console.log('Điều kiện đúng >=')
// } else {
//     console.log('Điều kiện sai >=')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh <=        NHỎ HƠN HOẶC BẰNG⁡
// var a = 25
// var b = 5
// if (a <= b) {
//     console.log('Điều kiện đúng <=')
// } else {
//     console.log('Điều kiện sai <=')
// }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh ===       TƯƠNG ĐƯƠNG⁡
// var a = 10
// var b = "10"
// if (a === b) {
//     console.log("Điều kiện đúng ===")
// } else { console.log("Điều kiện sai ===") }



// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁣Toán tử so sánh !==       KHÔNG TƯƠNG ĐƯƠNG⁡
// var a = '10'
// var b = "10"
// console.log(b != null);
