//!===========================================================================
// ! Gán tên Biến
// var hoTen = 'Mai Thanh Hưởng'
// alert(hoTen)

//!===========================================================================
// ! Hàm Build-in funtion
// *--------------------------------------------------------------------------
// * 1. alert: tạo ra pop-up cảnh báo người dùng
// alert('Chào cậu')
// *--------------------------------------------------------------------------

// * 2.Console : In dòng hông báo trên tag console trên trình duyệt
// console.log
// console.error
// console.warn
// *--------------------------------------------------------------------------

// * 3. Confirm :Tạo ra pop-up xác nhận người dùng
// confirm('Xác nhận bạn là người đăng nhập')
// *--------------------------------------------------------------------------

// * 4. Prompt : tạo ra pop-up cho người dùng nhập vào
// prompt('Xác nhận bạn không phải robot, Hãy điền YES')
// *--------------------------------------------------------------------------

// * 5. Set timeout: Dùng truyền 1 funtion và thời gian delay để chạy sau này, đơn vị mili giây
// setTimeout(function () {
// alert('Thông Báo, bạn đã truy cập vào website của chúng tôi')
// }, 3000)
// *--------------------------------------------------------------------------

// * 6. setInterval dùng để truyền 1 funtion vào sẽ được lặp lại sau một khoảng thời gian đơn vị milli giây
// setInterval(function () {
//     console.log('Đây là số:' + Math.random)
// }, 2000)

//!===========================================================================
// ! If - Else : Điều kiện nếu thì
// var a = 3 + 6
// if (a < 2) {
//     alert('Điều kiện đúng')
// } else {
//     alert('Điều kiện sai')
// }

//!===========================================================================
// ! Toán tử Logic
// *--------------------------------------------------------------------------

// * 1: && và và, đây là toán tử bắt buộc mọi điều kiện phải đúng thì mới đúng
// var a = 1
// var b = 2
// if (a > 0 && b > 0) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }
// *--------------------------------------------------------------------------

// * 2: || toán tử hoặc, chỉ cần 1 trong nhiều điều kiện đúng thì sẽ đúng
// var a = 1
// var b = 2
// if (a > 0 || b > 0) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }
// *--------------------------------------------------------------------------

// * 3: ! Toán tử NOT, đây là toán tủ phủ định lại kết quả
// var a = 1
// var b = 2
// if (!(a > 0 && b > 0)) {
//     alert('Điều kiện đã đúng')
// } else {
//     alert('Điều kiện sai')
// }

//!===========================================================================
// ! Kiểu dữ liệu trong JS
// *--------------------------------------------------------------------------

// * 1: Number: Số học có thể là số âm hay dương, số thực với các chấm, không nhất thiết phải có dấu.
// var a = 1
// var b = 2
// var c = 3
// *--------------------------------------------------------------------------

// * 2: String : Kiểu chuỗi, được chứa trong '' hoặc ""
// var ten = 'Hưởng'
// var ho = 'Mai'
// var tuoi = '25'
// *--------------------------------------------------------------------------

// *3 : Boolean thể hiện true or false
// var isName = true
// var ho = false
// *--------------------------------------------------------------------------

// *4 : Undefined : Không gán giá trị cho biến
// var age;
// *--------------------------------------------------------------------------

// *5:  Null Kiểu dữ liệu chả có gì
// var person = null
// *--------------------------------------------------------------------------

// *6:  Symbol: Tạo ra một symbol mới và assign cho biến
// var symA = Symbol('symA'); // unique identifier for the object created by this function call
// console.log(typeof symA);
// *--------------------------------------------------------------------------

// *7: Funtion  : Tạo ra 1 chức năng mà chỉ khi gọi mới thực hiện
// function sayHello() {
//     return "Chào các con vợ";
// }
// console.log("sayHello", typeof sayHello());
// *--------------------------------------------------------------------------

// *8: Object   : Kiểu Object thường xuyên sử dụng để lưu hàm
// const car = {
//     make: "Toyota", model: "Camry", year: 2021
// }
// console.log(car)
// *--------------------------------------------------------------------------

// *9: Array    : Giống Object
// let fruits = ["apple", "banana", "orange"]
// console.log(`Fruits ${fruits}`)
// *--------------------------------------------------------------------------

//  *10: Cách kiểm tra kiểu dữ liệu dùng typeof

// var a = 1
// console.log((typeof a));
// console.log((typeof 'a'))

//!===========================================================================
// ! toán tử so sánh kiểu dữ liệu và giá trị
// *--------------------------------------------------------------------------

//* So sánh giá trị tuyệt đối
// var a = 1
// var b = 2
// console.log((a === b));
// *--------------------------------------------------------------------------

//* So sánh giá trị
// var a = 3
// var b = 5
// console.log((a !== b));

//!===========================================================================
//! Chuỗi
// *--------------------------------------------------------------------------

//* 1: tạo chuỗi
// var fullname = 'Thanh Hưởng'
// var age = '25'
// console.log(fullname + age)
// *--------------------------------------------------------------------------

// * 2:Xem độ dài chuỗi
// var fullname = 'Thanh Hưởng'
// var age = '25'
// console.log(fullname.length + age.length)
// *--------------------------------------------------------------------------

// * 3: Dùng dấu \ để hiển thị '' hoặc "" hoặc \ trong chuỗi
// var str = "\'\"\\hello world\\" // output là \'\"\hello world\'
// console.log("str:", str);

//!===========================================================================
//! Làm việc với chuỗi
// *--------------------------------------------------------------------------

// *1 length : Độ dài chuỗi
// var name = "thanhhuong";
// console.log('Độ dài chuỗi của ' + name + ' là ' + name.length + '.');
// *--------------------------------------------------------------------------

// *2 findindex : Tìm ký tự trong chuỗi trong chuỗi
// var text = "Thanh Huong";
// let index = text.indexOf("u");   // Output: 0 (với ký tự u xuất hiện lần đầu tiên).
// if (index !== -1) {                  // Nếu không gặp, in ra
//     console.log(`Từ vựng 'u' được tìm thấy ở vị trí ${index}.`);
// }
// *--------------------------------------------------------------------------

// *3 Cut string : Cắt chuỗi
// const myString = "<NAME>";
// console.log(`${myString}`);
// console.log(`${myString}`.slice(4))    // cắt chuỗi vị trí 4
// console.log(`${myString}`.substring(6, -7))
// *--------------------------------------------------------------------------

// *4 Replace ghi đè chuỗi
// var a = 'Hoc JS tai F8'
// console.log(a.replace('JS', 'Javascript'))
////// ? --> Thay thế JS thành Javascript

// var a = 'Hoc JS JS JS tai F8'
// console.log(a.replace(/JS/g, 'Javascript'))
////// ? --> Thay thế toàn bộ JS thành Javascript
// *--------------------------------------------------------------------------

// *5 Convert uppercase thành chữ hoa
// var a = 'Hoc JS JS JS tai F8'
// console.log(a.toUpperCase())
// *--------------------------------------------------------------------------

// *6 Convert to lowercase thành chữ thường
// var a = 'Hoc JS JS JS tai F8'
// console.log(a.toLowerCase());
// *--------------------------------------------------------------------------

// *7 Strim Cắt bỏ khoảng trắng thừa 2 đầu
// var str = ' Hoc Js ';
// console.log(str);           // output: " Hoc Js "
// console.log(str.trim());      // output: "HocJs"
// *--------------------------------------------------------------------------

// *8 Split cắt chuỗi
// var traiCay = 'Apple';
// console.log(traiCay.split(''))

//!===========================================================================
//! Kiểu số Number và làm việc với kiểu số Number
// *--------------------------------------------------------------------------

// * 1 Kiểu To String : biến kiểu số Number thành chuỗi String
// var age = 24;
// var PI = 3.14

// var myString = PI.toString()
// console.log(myString)
// *--------------------------------------------------------------------------

// *2 Kiểu to Fixed : Làm tròn số
// var pi = 3.14343434
// console.log(pi.toFixed())

//!===========================================================================
//! Mảng: Array
// *--------------------------------------------------------------------------

// *1 : Tạo mảng
// var fruits = [
//     'apple',
//     'banana',
//     'orange'
// ];
// console.log("Mảng Fruits:", fruits);
// *--------------------------------------------------------------------------

// *2 : Truy xuất mảng
// console.log(fruits[0])     // lấy ra phần tử đầu tiên
// console.log(fruits[2])      // lấy ra phần tử cuối cùng

// *--------------------------------------------------------------------------

//  *3 : Thêm vào Mảng
// fruits.push('grape')   // thêm item vô cuối của array
// console.log("Push grape", fruits);
// *--------------------------------------------------------------------------

// *4 Xóa khỏi mảng
// fruits.pop();    // Xóa phần tử cuối cùng
// console.log("Xóa phần tử cuối cùng trong mảnh ", fruits);
// *--------------------------------------------------------------------------

// *5 Cắt mảng Array
// let arr = ['one', 'two', 'three'];
// arr.splice(1, 1)
// console.log(arr)
// *--------------------------------------------------------------------------

// *6 Xóa phần tử đầu mảng Shift
// let myArray = ['Nigga', "Hello World!", 'WOW'];
// console.log(myArray.shift())
// console.log(myArray)
// *--------------------------------------------------------------------------

// *7 Thêm phần tử đầu mảng Array unShift
// let newArr = ["apple", "banana"];
// console.log(newArr)
// newArr.unshift("orange"); ---> thêm orange vào mảng
// console.log(`Unshift: ${JSON.stringify(newArr)}`);
// console.log(newArr)
// *--------------------------------------------------------------------------

// *8 Xóa phần tử trong mảng Splice
// let numbers = [20, 30, 40];
// numbers.splice(1, 1);   // xóa số 30 ra và chỉ 1 số (1,1)
// console.log('Splice:', JSON.stringify(numbers));
// *--------------------------------------------------------------------------

// *9 Nối 2 mảng thành 1 mảng
// let arrayOne = [1, 2, 3],
//     arrayTwo = [4, 5, 6]
// console.log([arrayOne, arrayTwo])
// console.log(...[...arrayOne, ...arrayTwo]);
// *--------------------------------------------------------------------------

// *10 Slicing array
// let fruits = ["Banana", "Orange", "Mango", "Apple", "Green Apple"]
// console.log(fruits.slice(1)) // ---> Bắt đầu cắt mảng từ vị trí chỉ định


//!===========================================================================
//! Function : Function là một khối mã chức năng và không tự chạy đến khi được gọi
// *--------------------------------------------------------------------------

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
// *--------------------------------------------------------------------------

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

// *--------------------------------------------------------------------------

// *3 Return trong Function
// function phepCong(a, b) {
//     return a + b; // ---> Bên dưới hàm return sẽ bị bỏ qua và không có return thì nó sẽ trả về undefine
// }
// var ketQua = phepCong(2, 8)
// console.log('Kết quả ' + ketQua)

// *--------------------------------------------------------------------------

// *4 Các loại Function
////// ? Declaration Function và có thể gọi trước khi định nghĩa
// function showMessage() {
//     console.log("Declaration Function!");
// }
// showMessage()

////// ? Expression Funtion : gán 1 Function cho 1 biến
// var showMessage2 = function () {
//     console.log("Expression Funtion");
// }
// showMessage2();

//!===========================================================================
// ! Object (Đối tượng) trong JS: thường được sử dụng lưu trữ thông tin cho một đối tượng cụ thể
// var thongTin = {
//     ten: 'Thanh Hưởng',
//     tuoi: '24',
//     diaChi: 'Bình Thạnh, tp HCM'
// }
// thongTin.email = 'mthanhhuong85@gmail.com' //// //?---> thêm vào Object
// console.log(thongTin)
// console.log(thongTin.ten) //// //?---> cách 1 lấy thông tin Name trong Object

// //✨✨✨✨✨✨✨✨✨✨✨
// var emailKey = 'email'
// var hocSinh = {
//     tenHocSinh: 'Phong',
//     tuoi: '16',
//     [emailKey]: 'asdasd@gmail.com',
// };
// console.log(hocSinh)
// delete hocSinh.tuoi; //// //?---> Xóa 1 phần tử trong Object
// console.log(hocSinh)

//!===========================================================================
// ! Object constructor : Xây dựng đối tượng
// ?----->Nên nhớ Object contructor thì nên viết hoa ký tự đầu tiên, vd : NguoiDung

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//// //?---> Tạo ra phương thức chung
// var author = new User('Mai', 'Thanh Hưởng', 'Avatar');
// var user = new User('Họ', 'Tên', 'Avatar');

//// //?---> Thêm phương thức riêng
// author.title = 'Chia sẻ tại F8'
// user.comment = 'Xin chào'

// console.log(author.getName())
// console.log(user.getName())

//////✨✨✨✨✨✨✨✨✨✨✨
// function NguoiDung(firstName, lastName, age, position) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.position = position;

//     this.tenDayDu = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
//     this.tuoiDiaChi = function () {
//         return `${this.age} ${this.position}`
//     }

// }

// NguoiDungDau = new NguoiDung('Thành', 'Nguyễn', ' 38', 'KG')
// NguoiDungHai = new NguoiDung('Kiên', 'Trần', ' 43', 'AG')

// console.log(NguoiDungDau.tenDayDu() + NguoiDungDau.tuoiDiaChi())
// console.log(NguoiDungHai.tenDayDu() + NguoiDungHai.tuoiDiaChi())

//!===========================================================================
//  ! Object prototype: Nguyên mẫu để tạo 1 đối tượng và sử dụng .prototype bên ngoài Object contructor để thêm đối tượng
// function NguoiDung(firstName, lastName, age, position) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.position = position;

//     this.tenDayDu = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
//     this.tuoiDiaChi = function () {
//         return `${this.age} ${this.position}`
//     }

// }

// NguoiDung.prototype.diemSo = ' 7.5'
// NguoiDung.prototype.className = function () {
//     return this.diemSo;
// }

// NguoiDungDau = new NguoiDung('Thành', 'Nguyễn', ' 38', 'KG')
// NguoiDungHai = new NguoiDung('Kiên', 'Trần', ' 43', 'AG')

// console.log(NguoiDungDau.tenDayDu() + NguoiDungDau.tuoiDiaChi() + NguoiDungDau.diemSo)
// console.log(NguoiDungHai.tenDayDu() + NguoiDungHai.tuoiDiaChi() + NguoiDungHai.className())

//!===========================================================================
// ! Đối tượng Date : Tạo ra hoặc xem thời gian
// var date = new Date()

// var day = date.getDate()
// console.log('Hôm nay ngày: ' + day)

// var month = date.getMonth() + 1; // ?---> Đối tượng getMonth chỉ hiển thị từ 0 -> 11 nên phải +1
// console.log('Hôm nay tháng: ' + month)

// var time = date.getHours()
// console.log('Bây giờ là : ' + time + ' giờ')

// var minute = date.getMinutes()
// console.log('Bây giờ là : ' + minute + ' phút')

//!===========================================================================
// ! Ternary Operator Toán tử 3 ngôi
// var course = {
//     name: 'Javascript',
//     coin: 250,
// }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'; //*-----> Toán tử 3 ngôi: điều kiện ? Nếu điều kiện đúng : điều kiện sai (? :)
// console.log('Khóa học: ' + `${course.name}` + ' có giá: ' + `${course.coin} Coins`);

//!===========================================================================
// ! Vòng lặp for LOOP
// ? 1 for   Lặp với điều kiện đúng
// for (var i = 0; i <= 10; i++) {
//* Code sẽ chạy số lần tương đương điều kiện i (i<=100)
////todo Chú ý điều kiện nếu không vòng lặp sẽ vô hạn (i>0; ; true)
//     console.log(i)
// }

//*----------------------------------------------------
////todo Ứng dụng vòng lặp lấy phần tử từ mảng Array
// var myArray = [
//     'JS',
//     'PHP',
//     'Python',
//     'Java',
//     'Ruby',
// ];
// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

//*----------------------------------------------------
// var juice = [
//     {
//         name: "Pepsi", price: "6 $"
//     },
//     {
//         name: "Coca", price: '7 $'
//     },
//     {
//         name: "7Up", price: '5 $'
//     },
// ]
// var juicesLength = juice.length;
// for (var i = 0; i < 3; i++) {
//     console.log('Bạn đã chọn: ' + juice[i].name + ' và có giá ' + juice[i].price);
// }

//*----------------------------------------------------
// var traiCay = [
//     { loai: 'Táo', gia: '35000 Vnd / 1kg' },
//     { loai: 'Quýt', gia: '8000 Vnd / 1kg' },
//     { loai: 'Dưa hấu', gia: '15000 Vnd / 1kg' }
// ]

// var traiCayLength = traiCay.length;
// for (let i = 0; i < traiCayLength; i++) {
//     console.log('Bạn chọn mua: ' + traiCay[i].loai + ' với giá ' + traiCay[i].gia);

// }

//*----------------------------------------------------
// ? 2 For-in    Lặp qua key của tối tượng
// var myInfo = {
//     name: 'Thanh Hưởng',
//     age: '25',
//     address: 'Kiên Giang',
// }
// for (var thongTin in myInfo) {
//     console.log(myInfo[thongTin]);
// }

//*----------------------------------------------------
// ? 3 For-of    Lặp qua value của tối tượng
// var languages = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "Ruby",
//     "Swift",
// ]
// for (var languages of languages) {
//     console.log(languages)
// }

//*----------------------------------------------------
// ? 4 While     Lặp khi điều kiện đúng
// var i = 1;
// while (i < 10) {
//     i++;     //todo  ----> Nhớ đặt điều kiện nếu không sẽ treo máy
//     console.log(i)
// }


// ? 5 Do-While   Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
// var i = 0;
// do {
//     i++;    //todo  ----> Nhớ đặt điều kiện nếu không sẽ treo máy
//     console.log(i)
// } while (i < 10);\

//*----------------------------------------------------
// var i = 0
// var isSuccess = false;
// do {
//     i++;
//     console.log('Nạp thẻ lần ' + i);
//     if (false) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);

//*----------------------------------------------------
// ? 4 Nested Loop Vòng lặp lồng nhau
// var myArray = [
//     ['Táo', 'Chuối'],
//     ['Cam', 'Bưởi'],
//     ['Quýt', 'Nho']
// ]
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

//*----------------------------------------------------
// var myArray = [
//     ["John", "Doe"],
//     ["Jane", "Smith"],
//     ["Bob", "Davidson"],
// ]
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

//*----------------------------------------------------
//// ?Ví dụ thêm: tạo vòng lặp từ 100 giảm xuống 0 và cách nhau 5 giá trị
// for (let i = 100; i > 0; i -= 5) {
//     console.log(i)
// }

//// ?Ví dụ thêm: tạo vòng lặp từ 0 tăng lên 100 và cách nhau 5 giá trị
// for (let j = 0; j <= 100; j += 5) {
//     console.log('tăng từ 0 lên 100:' + j)
// }

//!===========================================================================
//! Làm việc với mảng Array phần 2:
//  *  Array  forEach
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 0 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 110 },
// ]
// courses.forEach(function (course, index) {
//     console.log(index, 'Khóa học: ' + course.name + ' do giáo viên ' + course.teacher + ' dạy, và nó có giá ' + course.gia)
// })
//*----------------------------------------------------
//  *  Array  every : Thường dùng kiểm tra tất cả phần tử phải hợp lệ điều kiện trong mảng
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 0 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 0 },
// ]
// var isFree = courses.every(function (course, index) {
//     return course.gia === 0 //?-----> Thay thế giá trị để tìm giá trị đúng
// })

// console.log('Khóa học này có miễn phí không: ' + isFree)
//*----------------------------------------------------
//  *  Array  some : Thường dùng kiểm tra chỉ cần đúng 1 điều kiện thì sẽ dừng lại kết quả đúng
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 220 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 110 },
// ]
// var isFree = courses.some(function (course) {
//     return course.gia === 0
// })
// console.log(isFree)

//*----------------------------------------------------
//  *  Array find : Thường dùng tìm kiếm chỉ 1 phần tử trong mảng, VD(Tìm số điện thoại trong danh bạ)
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 220 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 110 },
// ]
// var tìmKiem = courses.find(function (course) {
//     return course.name === 'JavaScript'
// })
// console.log(tìmKiem)

//*----------------------------------------------------
//  *  Array filter? : Tìm tất cả phần tử hợp lệ trong mảng (VD: tìm giá khóa học giống nhau)
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 220 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 110 },
//     { name: "Java Programming", teacher: "Mrs Sarah Lee", gia: 0 },
//     { name: ".NET Framework", teacher: "Professor Kim Choi", gia: 0 },
// ]
// var timKiem = courses.filter(function () {
//     return courses.gia === 0
// })
// console.log('Array Filter: ' + timKiem)

//*----------------------------------------------------
//  *  Array map :
// var courses = [
//     { name: "HTML/CSS", teacher: "Mr John Doe", gia: 220 },
//     { name: "JavaScript", teacher: "Ms Jane Smith", gia: 0 },
//     { name: "Python Programming", teacher: "Dr Bob Davidson", gia: 110 },
//     { name: "Java Programming", teacher: "Mrs Sarah Lee", gia: 0 },
//     { name: ".NET Framework", teacher: "Professor Kim Choi", gia: 0 },
// ]
// /* Phần này sẽ thay thế toàn bộ phía trên */
// function courseHandler(khoaHoc) {
//     return {
//         ten: `${khoaHoc.name}`,
//         tenGiaoVien: `${khoaHoc.teacher}`,
//         diaChi: 'HCM city',
//         giaKhoaHoc: `Gia: ${khoaHoc.gia}`
//     }
// }
// var newCourses = courses.map/*--> Bên trong map phải là 1 function*/(courseHandler)/*--> Function đã khai báo phía trên*/
// console.log(newCourses)

//*----------------------------------------------------
//  *  Array reduce? : Dùng để nhận 1 giá trị duy nhất trong phần tử từ array

///==> tổng số tiền
var khoaHocs = [
    {
        id: 1,
        name: 'Javascript',
        price: 100,
    },
    {
        id: 2,
        name: 'HTML',
        price: 200,
    },
    {
        id: 3,
        name: 'CSS',
        price: 500,
    },
    {
        id: 4,
        name: 'Boostrap',
        price: 300,
    },
]

// //!=====> Dùng vòng lặp (Không ưu tiên dùng)
// //* Biến lưu trũ
// let totalPrice = 0
// //* Lặp qua các phần tử
// for (let khoaHoc of khoaHocs) {
//     //* Thực hiện việc lưu trữ
//     totalPrice += khoaHoc.price;

// };
// //*In ra giá trị
// document.write('Giá khóa học là: ' + totalPrice + ' xu')



// //! ======> Dùng Array Reduce   (Ưu tiên dùng)
// let totalPrice1 = khoaHocs.reduce(function (total, khoaHoc) {
//     return total + khoaHoc.price
// }, 0) //*Giá trị khởi tạo (initial value) nên có giá trị khởi tạo, trong trường hợp này là 0
// document.write(totalPrice1)

//*----------------------------------------------------
//  ?   Bài tập Flat: làm phẳng mảng tử Depth Array
// let depthArray = [1, 2, [3, 4], 5, 6, [7, 8]]

// let mangPhang = depthArray.reduce(function (flatOutput /*=> Biến lưu trũ */, depthItems /*=> giá trị hiện tại Current Value */) {
//     return flatOutput.concat(depthItems)//*--> Phương thức concat để hợp nhất hai hoặc nhiều mảng và trả về mảng mới
// }, []) //=> Đưa vào giá trị khởi tạo là mảng rỗng để bỏ mảng lồng



// document.write('Hợp nhất mảng: ' + mangPhang)




// //! -------------------------------------------------------
// //! Callback funtion Là hàm (function) và được truyền qua đối số khi gọi hàm khác ---> Nói ngắn gọn là gọi 1 function trong 1 function khác

// let courses = [
//     'html',
//     'css',
//     'java'
// ]
// courses.map(function (khoaHoc) {
//     console.log(khoaHoc)
// })





// //! -------------------------------------------------------
// //! HTML DOM : Dom là Document Object Model, tài liệu hiển thị dưới dạng đối tượng
