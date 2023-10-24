////!_______>>> Nội dung có trong bài này
/*
    ⁡⁢⁣⁢Chuỗi trong JS:⁡
        ⁡⁢⁣⁣1: Tạo chuỗi⁡
        ⁡⁢⁣⁣2: Sử dụng dấu backslash \ trước dấu nháy
                let str = "Hello\nWorld";
                console.log(str);⁡
        ⁡⁢⁣⁣3: Xem độ dài chuỗi⁡             ⁡⁣⁣⁢(string.length)
                let fruits = ['apple', 'banana', 'orange'];
                let length = fruits.length; // length = 3
                console.log(length);⁡
        ⁡⁢⁣⁣4: Template String Es6⁡          ⁡⁣⁣⁢${tring}
                let name = 'John';
                let age = 30;
                let result = `My name is ${name} and I am ${age} years old.`;
                console.log(result);⁡

    ⁡⁢⁣⁢Làm việc với chuỗi (String Method):⁡
       ⁡⁢⁣⁣ 1: Length:⁡ ⁡⁣⁢⁣Làm việc với độ dài chuỗi
        ⁡⁢⁣⁡⁢⁣⁣2: Find index:⁡ ⁡⁣⁢⁣Tìm chuỗi
        ⁡⁢⁣⁡⁢⁣⁣3: Cut String:⁡ ⁡⁣⁢⁣Cắt chuỗi
        ⁡⁡⁢⁣⁡⁢⁣⁣4: Replace String:⁡ ⁡⁣⁢⁣Thay chuỗi
        ⁡⁢⁣⁣5: Convert to upper case:⁡⁣ ⁡⁣⁢⁣Làm chuỗi thành chữ hoa⁡
        ⁡⁢⁣⁣6: Convert to lower case:⁡ ⁡⁣⁢⁣Làm chuỗi thành chữ ⁡⁣⁢⁣thường
        ⁡⁢⁣⁣7: Trim:⁡ ⁡⁣⁢⁣Loại bỏ ký tự thừa ⁡⁣⁣⁢(Khoảng trống)
        ⁡⁢⁣⁡⁢⁣⁣8: Split:⁡ ⁡⁣⁢⁣Cắt một chuỗi thành array ⁡⁣⁣⁢(Mảng)
        ⁡⁢⁣⁣9 Get string index:⁡ ⁡⁣⁢⁣Lấy ký tự từ index

    ⁡⁢⁣⁢Số trong JS⁡
        ⁡⁢⁣⁢⁡⁢⁣⁣1: Tạo biến⁡
        ⁡⁢⁣⁣2: Kiểm tra datatype⁡ ⁡⁣⁣⁢(typeof)⁡
        ⁡⁢⁣⁣3: Làm việc với số trong js⁡ ⁡⁣⁣⁢(Number Method JS)


    ⁡⁢⁣⁢Mảng trong JS⁡
        ⁡⁢⁣⁣1: Tạo mảng
        2: Truy xuất mảng
        3: Làm việc với mảng:⁡
             -->   ⁡⁢⁣⁢Array.forEach()⁡ - ⁡⁣⁢⁣lặp qua từng phần tử trong mảng và thực hiện một hàm đã cho trên mỗi phần tử.⁡
             -->   ⁡⁢⁣⁢Array.map()⁡ - ⁡⁣⁢⁣tạo một mảng mới bằng cách áp dụng một hàm đã cho cho mỗi phần tử trong mảng gốc.⁡
             -->   ⁡⁢⁣⁢Array.filter()⁡ - ⁡⁣⁢⁣tạo một mảng mới bằng cách lọc các phần tử trong mảng gốc theo một hàm đã cho.⁡
             -->   ⁡⁢⁣⁢Array.reduce()⁡ - ⁡⁣⁢⁣giảm mảng thành một giá trị duy nhất bằng cách áp dụng một hàm đã cho cho từng cặp phần tử liên tiếp trong mảng.⁡
             -->   ⁡⁢⁣⁢Array.some()⁡ - ⁡⁣⁢⁣kiểm tra xem có bất kỳ phần tử nào trong mảng thỏa mãn một hàm đã cho.⁡
             -->   ⁡⁢⁣⁢Array.every()⁡ - ⁡⁣⁢⁣kiểm tra xem tất cả các phần tử trong mảng thỏa mãn một hàm đã cho.⁡
             -->   ⁡⁢⁣⁢Array.indexOf()⁡ - ⁡⁣⁢⁣trả về chỉ mục của phần tử đầu tiên trong mảng thỏa mãn một hàm đã cho.⁡
             -->   ⁡⁢⁣⁢Array.lastIndexOf()⁡ - ⁡⁣⁢⁣trả về chỉ mục của phần tử cuối cùng trong mảng thỏa mãn một hàm đã cho.⁡
             -->   ⁡⁢⁣⁢Array.push()⁡ - ⁡⁣⁢⁣thêm một hoặc nhiều phần tử vào cuối mảng.⁡
             -->   ⁡⁢⁣⁢Array.pop()⁡ - ⁡⁣⁢⁣xóa và trả về phần tử cuối cùng trong mảng.⁡
             -->   ⁡⁢⁣⁢Array.shift()⁡ - ⁡⁣⁢⁣xóa và trả về phần tử đầu tiên trong mảng.⁡
             -->   ⁡⁢⁣⁢Array.unshift()⁡ - ⁡⁣⁢⁣thêm một hoặc nhiều phần tử vào đầu mảng.⁡
             -->   ⁡⁢⁣⁢Array.slice()⁡ - ⁡⁣⁢⁣trả về một mảng mới chứa các phần tử từ một chỉ mục bắt đầu đến một chỉ mục kết thúc đã cho.⁡
             -->   ⁡⁢⁣⁢Array.splice()⁡ - ⁡⁣⁢⁣xóa các phần tử khỏi mảng tại một chỉ mục bắt đầu đã cho và thay thế chúng bằng các phần tử mới.⁡
             -->   ⁡⁢⁣⁢Array.concat()⁡ - ⁡⁣⁢⁣nối hai hoặc nhiều mảng thành một mảng mới.⁡
             -->   ⁡⁢⁣⁢Array.join()⁡ - ⁡⁣⁢⁣nối các phần tử của mảng thành một chuỗi.⁡
             -->   ⁡⁢⁣⁢Array.reverse()⁡ - ⁡⁣⁢⁣đảo ngược thứ tự các phần tử trong mảng.



    ⁡⁢⁣⁢Object Trong JS:
    ⁡    ⁡⁢⁣⁣1: Tạo đối tượng⁡
        ⁡⁢⁣⁣2: Xây dựng đối tượng Object Contructor⁡ ( ⁡⁣⁣⁡⁣⁢⁣Object Constructor trong JavaScript là một hàm đặc biệt được sử dụng để tạo và khởi tạo các đối tượng. Nó là một hàm có thể được gọi bằng từ khóa `new` theo sau là tên của hàm tạo và danh sách các đối số. Khi một đối tượng được tạo bằng cách sử dụng một hàm tạo đối tượng, hàm tạo sẽ được gọi và các đối số được truyền cho nó. Hàm tạo có thể sử dụng các đối số này để khởi tạo các thuộc tính của đối tượng.⁡ ⁡)

                        function Person(name, age) {
                        this.name = name;
                        this.age = age;
                        }
                        const person1 = new Person("John", 30);
                        const person2 = new Person("Jane", 25);
                        console.log(person1.name); // "John"
                        console.log(person2.age); // 25

        ⁡⁢⁣⁣3: Object prototype:⁡⁡ ⁡⁣⁢⁣Nguyên mẫu tạo đối tượng dùng để tạo thêm thuộc tính bên ngoài 1 function


    ⁡⁢⁣⁢Tính toán trong JS⁡
        ⁡⁢⁣⁣1: Math.pi:⁡             ⁡⁣⁢⁣Tính số pi
                let circumference = 2 * Math.pi * 5; // circumference = 31.41592653589793
                console.log(circumference);⁡
        ⁡⁢⁣⁣2: Math.round():⁡        ⁡⁣⁢⁣Làm tròn số
                let number = 3.5;
                let roundNumber = Math.round(number); // roundNumber = 4
                console.log(roundNumber);⁡
        ⁡⁢⁣⁣3: Math.abs() :⁡         ⁡⁣⁢⁣Giá trị tuyệt đối của 1 số
                ⁡let number = -3;
                let absNumber = Math.abs(number); // absNumber = 3
                console.log(absNumber);
        ⁡⁢⁣⁣4: Math.ceil():⁡         ⁡⁣⁢⁣Làm tròn trên
                ⁡let number = 3.5;
                let ceilNumber = Math.ceil(number); // ceilNumber = 4
                console.log(ceilNumber);
        ⁡⁢⁣⁣5: Math.floor():⁡        ⁡⁣⁢⁣Làm tròn dưới
                let number = 3.5;
                let floorNumber = Math.floor(number); // floorNumber = 3
                console.log(floorNumber);⁡
        ⁡⁢⁣⁣6: Math.random():⁡       ⁡⁣⁢⁣Tạo dãy số ngẫu nhiên nhỏ hơn 1
                let randomNumber = Math.round(Math.random() * 10); // 0 <= randomNumber < 10
                console.log(randomNumber);⁡
        ⁡⁢⁣⁣7: Math.min() : ⁡        ⁡⁣⁢⁣Lấy số nhỏ nhất
                let numbers = [3, 5, 1, 7, 2];
                let min = Math.min(...numbers); // min = 1
                console.log(min);⁡
        ⁡⁢⁣⁣8: Math.max   :⁡         ⁡⁣⁢⁣Lấy số lớn nhất
                let numbers = [3, 5, 1, 7, 2];
                let max = Math.max(...numbers); // max = 7
                console.log(max);⁡

*/
////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧










////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! CHUỖI TRONG JS
//  ⁡⁣⁢⁣1: Tạo chuỗi⁡
// let fullName = "Thanh Hưởng"
// console.log(fullName)

// ⁡⁣⁢⁣ 2: Sử dụng dấu backslash \ trước dấu nháy⁡
// let str = 'Thanh Hưởng là \'siêu nhân\''
// console.log(str)

//  ⁡⁣⁢⁣3: Xem độ dài chuỗi⁡
// let ten = 'Thanh Hưởng';
// console.log(ten.length)

//  ⁡⁣⁢⁣4: Template String Es6⁡
// let firstName = "Mai"
// let lastName = "Thanh Hưởng"

// console.log(`Tôi là: ${firstName} ${lastName}`)
//Để cộng chuỗi trong ES6 ta dùng dấu ${String}*/



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢Làm việc với chuỗi (String Method)⁡
// let stringDemo = " Đây là stringDemo Đây "

// ⁡⁢⁣⁢1: Length⁡: ⁡⁣⁢⁣Làm việc với độ dài chuỗi⁡
// console.log(stringDemo.length)

// ⁡⁢⁣⁢2: Find index⁡: ⁡⁣⁢⁣Tìm chuỗi⁡
// console.log(stringDemo.indexOf('Đây'))

// ⁡⁢⁣⁢3: Cut String⁡: ⁡⁣⁢⁣Cắt chuỗi⁡
// console.log(stringDemo.slice(4, 9))

// ⁡⁢⁣⁢4: Replace String⁡: ⁡⁣⁢⁣Thay chuỗi⁡
// console.log(stringDemo.replace(/Đây/g, 'Xin Chào'))

// ⁡⁢⁣⁢5: Convert to upper case:⁡⁣⁢⁣ Làm chuỗi thành chữ hoa⁡⁡
// console.log(stringDemo.toUpperCase())

// ⁡⁢⁣⁢6: Convert to lower case: ⁡⁣⁢⁣Làm chuỗi thành chữ ⁡⁣⁢⁣thường⁡
// console.log(stringDemo.toLowerCase())

// ⁡⁢⁣⁢7: Trim⁡: ⁡⁣⁢⁣Loại bỏ ký tự thừa ⁡⁣⁣⁢(Khoảng trống)⁡
// console.log(stringDemo.trim())

// ⁡⁢⁣⁢8: Split⁡: ⁡⁣⁢⁣Cắt một chuỗi thành array ⁡⁣⁣⁢(Mảng)⁡
// let arrSplit = 'Js,PHP,Ruby'
// console.log(arrSplit.split(','))

// ⁡⁢⁣⁢9 Get string index⁡: ⁡⁣⁢⁣Lấy ký tự từ index⁡
// let myString1 = 'Thanh Hưởng'
// console.log(myString1[2])







////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
////! SỐ TRONG JS
// ⁡⁢⁣⁢1: Tạo biến⁡
// let num1 = 10;
// let pi = 3.14

// ⁡⁢⁣⁢2: Kiểm tra datatype⁡
// console.log(typeof num1)
// console.log(typeof pi)


////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Làm việc với số trong js ⁡⁣⁣⁢(Number Method JS)⁡
// To String: Biến số thành chuỗi
// let numberDemo = 1000
// console.log(numberDemo.toString())

// To Fixed: Làm tròn số thập phân
// let fixedNum = 123.4567
// console.log(fixedNum.toFixed())



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
// ////! MẢNG TRONG JS
////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁢⁡⁢⁣⁢1: Tạo mảng⁡⁡
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



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁣⁢⁡⁢⁣⁢2: Truy xuất mảng⁡⁡
// console.log(myArray[1]);
// console.log(myArray.length)



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢3: Làm việc với mảng (Array Method)⁡

// var languages = [
//     "JavaScript",
//     "Python",
//     "Java"
// ]
//// ⁡⁢⁣⁢To string⁡: ⁡⁣⁢⁣chuyễn array sang chuỗi⁡
// console.log(languages.toString())



//// ⁡⁢⁣⁢Join:⁡ ⁡⁣⁢⁣gộp các phần tử của mảng thành 1 chuỗi⁡
// console.log(languages.join(" - "))



//// ⁡⁢⁣⁢Pop⁡: ⁡⁣⁢⁣xóa phần tử cuối mảng và trả về phần tử đã xóa⁡
// console.log(languages.pop());



//// ⁡⁢⁣⁢Push⁡: ⁡⁣⁢⁣thêm vào mảng một vài phần tử⁡
// console.log(languages.push('Dart', 'C#'))
// console.log(languages)



//// ⁡⁢⁣⁢Shift⁡: ⁡⁣⁢⁣Xóa phần tử đầu mảng và trả về⁡
// console.log(languages.shift())



//// ⁡⁢⁣⁢Unshift⁡: ⁡⁣⁢⁣Thêm phần tử vào đầu mảng⁡
// console.log(languages.unshift('C++'))
// console.log(languages)



//// ⁡⁢⁣⁢Splicing⁡: ⁡⁣⁢⁣Xóa phần tử vào mảng, chèn phần tử mới vào mảng⁡
// console.log(languages.splice(3));
// //!--> Xóa mảng thứ 3
// languages.splice(1, 0, 'Dart')
// console.log(languages)
// //!--> Thêm mảng vào vị trí 1, không xóa phần tử nào, và thêm Dart



//// ⁡⁢⁣⁢Concat⁡: ⁡⁣⁢⁣Nối mảng⁡
// var languages1 = ['C#', 'C++']
// console.log(languages.concat(languages1))



//// ⁡⁢⁣⁢Slicing⁡: ⁡⁣⁢⁣Cắt một hoặc toàn bộ element⁡
// console.log(languages.slice(1))



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
// ////! OBJECT TRONG JS
////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Tạo đối tượng⁡

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



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Xây dựng đối tượng Object Contructor⁡

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

// let tacGia = new User('Mai', 'Thanh Hưởng', 'Avatar')
// let hocVien = new User('Trần', 'Trung', 'Avatar')

// console.log(tacGia)
// console.log(hocVien)

// Object Contructor là gì?

////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Object prototype?:⁡ ⁡⁣⁢⁣Nguyên mẫu tạo đối tượng dùng để tạo thêm thuộc tính bên ngoài 1 function⁡

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



////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
// ////! MATH OBJECT TRONG JS
/*
⁡
*/



//⁡⁢⁣⁢1: Math.pi⁡

// console.log(Math.PI)

//⁡⁢⁣⁢2: Math.round():⁡ ⁡⁣⁢⁣Làm tròn số⁡

// console.log(Math.round(1.25))

//⁡⁢⁣⁢3: Math.abs() :⁡ ⁡⁣⁢⁣Giá trị tuyệt đối của 1 số⁡

// console.log(Math.abs(1.25))

//⁡⁢⁣⁢4: Math.ceil():⁡ ⁡⁣⁢⁣Làm tròn trên⁡

// console.log(Math.ceil(4.00001)) // 5

//⁡⁢⁣⁢5: Math.floor():⁡ ⁡⁣⁢⁣Làm tròn dưới⁡

// console.log(Math.floor(5.003))

//⁡⁢⁣⁢6: Math.random():⁡ ⁡⁣⁢⁣Tạo dãy số ngẫu nhiên nhỏ hơn 1⁡

// console.log(Math.floor((Math.random() * 10))) ////! --> Ví dụ tạo ngẫu nhiên 1 số nhỏ hơn 10 kết hợp giữa .floor và .random


// let random = Math.floor((Math.random() * 5)) ////! --> Nhân 5 vì chỉ có 5 biến
// let randomCoin = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(randomCoin[random])
// ////!--> Ví dụ tặng ngẫu nhiên 1 trong 5 phần thưởng trên cho người chơi


//⁡⁢⁣⁢7: Math.min() :⁡ ⁡⁣⁢⁣Lấy số nhỏ nhất⁡

// console.log(Math.min(-100, 50, 15, -15)) //-100

//⁡⁢⁣⁢8: Math.max   :⁡ ⁡⁣⁢⁣Lấy số lớn nhất⁡

// console.log(Math.max(-100, 50, 15, -15)) //50