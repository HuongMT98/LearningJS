////❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
////! CHUỖI TRONG JS
////✨✨✨✨✨✨✨✨
////? 1: Tạo chuỗi  <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let fullName = "Thanh Hưởng"
// console.log(fullName)

////? 2: Sử dụng dấu backslash \ trước dấu nháy <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let str = 'Thanh Hưởng là \'siêu nhân\''
// console.log(str)

////? 3: Xem độ dài chuỗi   <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let ten = 'Thanh Hưởng';
// console.log(ten.length)

////? 4: Template String Es6    <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let firstName = "Mai"
// let lastName = "Thanh Hưởng"

// console.log(`Tôi là: ${firstName} ${lastName}`)
// /*Để cộng chuỗi trong ES6 ta dùng dấu ${String}*/



// ////✨✨✨✨✨✨✨✨
// ////? Làm việc với chuỗi (String Method) <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let stringDemo = " Đây là stringDemo Đây "

// ////*1: Length: Độ dài
// console.log(stringDemo.length)

// ////*2: Find index: Tìm chuỗi
// console.log(stringDemo.indexOf('Đây'))

// ////*3: Cut String: Cắt chuỗi
// console.log(stringDemo.slice(4, 9))

// ////*4: Replace String: Thay chuỗi
// console.log(stringDemo.replace(/Đây/g, 'Xin Chào'))

// ////*5: Convert to upper case
// console.log(stringDemo.toUpperCase())

// ////*6: Convert to lower case
// console.log(stringDemo.toLowerCase())

// ////*7: Trim: Loại bỏ ký tự thừa
// console.log(stringDemo.trim())

// ////*8: Split: Cắt một chuỗi thành array
// let arrSplit = 'Js,PHP,Ruby'
// console.log(arrSplit.split(','))

// ////*9: Lấy ký tự từ index
// let myString1 = 'Thanh Hưởng'
// console.log(myString1[2])



////❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
////! SỐ TRONG JS
////✨✨✨✨✨✨✨✨
// ////? 1: Tạo biến    <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let num1 = 10;
// let pi = 3.14

// ////? 2: Kiểm tra datatype   <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// console.log(typeof num1)
// console.log(typeof pi)


// ////✨✨✨✨✨✨✨✨
// ////? Làm việc với số trong js (Number Method JS)    <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// ////* To String: Biến số thành chuỗi
// let numberDemo = 1000
// console.log(numberDemo.toString())

// ////* To Fixed: Làm tròn số thập phân
// let fixedNum = 123.4567
// console.log(fixedNum.toFixed())



// ////❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
// ////! MẢNG TRONG JS
// ////? 1: Tạo mảng    <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// let myArray = [
//     'JS',
//     'Rudy',
//     'PHP',
//     null,
//     undefined,
//     function () {

//     },
// ]
// console.log(myArray)


////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
// ////? 2: Truy xuất mảng  <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// console.log(myArray[1]);
// console.log(myArray.length)


////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////? 3: Làm việc với mảng  <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--
// var languages = [
//     "JavaScript",
//     "Python",
//     "Java"
// ]
////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* To string: chuyễn array sang chuỗi
// console.log(languages.toString())

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* Join: gộp các phần tử của mảng thành 1 chuỗi
// console.log(languages.join(" - "))

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* Pop: xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop());

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* Push: thêm vào mảng một vài phần tử
// console.log(languages.push('Dart', 'C#'))
// console.log(languages)

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* Shift: Xóa phần tử đầu mảng và trả về
// console.log(languages.shift())

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////* Unshift: Thêm phần tử vào đầu mảng
// console.log(languages.unshift('C++'))
// console.log(languages)

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////*Splicing: Xóa phần tử vào mảng, chèn phần tử mới vào mảng
// console.log(languages.splice(3));
// //!--> Xóa mảng thứ 3
// languages.splice(1, 0, 'Dart')
// console.log(languages)
// //!--> Thêm mảng vào vị trí 1, không xóa phần tử nào, và thêm Dart

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////*Concat: Nối mảng
// var languages1 = ['C#', 'C++']
// console.log(languages.concat(languages1))

////💎💎💎💎💎💎💎💎💎💎💎💎💎💎
////*Slicing: Cắt một hoặc toàn bộ element
// console.log(languages.slice(1))



// ////❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
// ////! OBJECT TRONG JS
// ////✨✨✨✨✨✨✨✨
////* Tạo đối tượng

// let myInfo = {
//     name: 'Hưởng',
//     age: 25,
//     adress: 'Kiên Giang',
//     getName: function () {
//         return this.name
//     }
// }
// myInfo.email = "mthanhhuong85@gmail.com"////! --> Thêm Object
// console.log(myInfo)

// console.log(myInfo.name) //!--> Lấy thông tin
// console.log(myInfo)

// delete myInfo.age////!-->Xóa object
// console.log(myInfo)



// // ////✨✨✨✨✨✨✨✨
// ////* Xây dựng đối tượng Object Contructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// let tacGia = new User('Mai', 'Thanh Hưởng', 'Avatar')
// let hocVien = new User('Trần', 'Trung', 'Avatar')

// console.log(tacGia)
// console.log(hocVien)



// // ////✨✨✨✨✨✨✨✨
// ////* Object prototype?: Nguyên mẫu tạo đối tượng dùng để tạo thêm thuộc tính bên ngoài 1 function
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// User.prototype.className = 'Test prototype'////!--> Đây là cách dùng prototype để thêm thuộc tính

// User.prototype.getClassName = function () {
//     return this.className
// }////!--> Và có thể dùng cho một phương thức (Function)


// let tacGia1 = new User('Mai', 'Thanh Hưởng', 'Avatar')
// let hocVien1 = new User('Trần', 'Trung', 'Avatar')


// console.log(hocVien1.className)



// ////❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
// ////! MATH OBJECT TRONG JS
////*1: Math.pi
// console.log(Math.PI)

////*2: Math.round()                    --> Làm tròn số
// console.log(Math.round(1.25))

////*3: Math.abs()                      --> Giá trị tuyệt đối của 1 số
// console.log(Math.abs(1.25))

////*4: Math.ceil()                     --> Làm tròn trên
// console.log(Math.ceil(4.00001)) // 5

////*5: Math.flood()                    --> Làm tròn dưới
// console.log(Math.floor(5.003))

////*6: Math.random()                   --> Tạo dãy số ngẫu nhiên nhỏ hơn 1
// console.log(Math.floor((Math.random() * 10))) ////! --> Ví dụ tạo ngẫu nhiên 1 số nhỏ hơn 10 kết hợp giữa .floor và .random


// let random = Math.floor((Math.random() * 5))
// let randomCoin = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(randomCoin[random])
// ////!--> Ví dụ tặng ngẫu nhiên 1 trong 5 phần thưởng trên cho người chơi


////*7: Math.min()                      --> Lấy số nhỏ nhất
// console.log(Math.min(-100, 50, 15, -15)) //-100

////*8: Math.max                        --> Lấy số lớn nhất
// console.log(Math.max(-100, 50, 15, -15)) //50