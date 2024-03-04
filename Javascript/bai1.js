//!               1: Biến
/*  Khai báo biến: Bạn có thể khai báo biến trong JavaScript bằng từ khóa var, let hoặc const. Ví dụ:

                var number = 10;
                let name = "John";
                const PI = 3.14;            -> Hằng số

*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
// console.log("           Bài 1: Biến")

// var tenHocSinh = 'Nguyễn Văn A'
// let diemTrungBinh = 8.2
// const danhHieu = "học sinh giỏi"
// console.log("Học Sinh:", tenHocSinh, "có điểm trung bình:", diemTrungBinh, "và đạt danh hiệu", danhHieu)





//🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️
//🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫

//!               2: Kiểu dữ liệu
/* //* Trong JavaScript, có một số kiểu dữ liệu cơ bản như sau:

//* Kiểu dữ liệu nguyên thủy (Primitive data types):

            Số (Number): Ví dụ: let num = 10;
            Chuỗi (String): Ví dụ: let str = "Hello World";
            Boolean: Ví dụ: let isTrue = true;

//* Kiểu dữ liệu phức tạp (Complex data types):

            Mảng (Array): Ví dụ: let arr = [1, 2, 3];
            Đối tượng (Object): Ví dụ: let obj = { name: "John", age: 30 };


//* Kiểu dữ liệu đặc biệt:

            Null: Ví dụ: let nullValue = null;
            Không xác định (Undefined): Ví dụ: let undefinedValue;

*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
// console.log("           Bài 2: Kiểu dữ liệu")

// let num = 10
// console.log("số:", num)
// let str = "Hello World"
// console.log("Kiểu chuỗi:", str)
// let bole = true
// console.log("Kiểu boolean: ", bole)
// let obj = {
//     name: "Hưởng",
//     age: 25
// }
// console.log("Kiểu object:", obj)
// let arr = [1, 2, 3, 4, 5]
// console.log("Kiểu mảng :", arr)
// let nullx = null
// console.log("Kiểu null: ", nullx)
// let undefine = undefined
// console.log("Kiểu undefined: ", undefine)



//🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️
//🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
//!                     3: Hàm Buid-in
/*
////?                1: Alert:
////?                2: Console:
////?                3: Confirm:
////?                4: Prompt:
////?                5: Set Interval:
////?                6: Set Timeout:
*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
// console.log("           Bài 3: Hàm Build-in")

// alert("Hello World")
// console.log("Hello World")
// confirm("Bạn có muốn tiếp tục không?")
// prompt("Bạn có đồng ý không")
// setInterval(() => {
//     console.log("Hiện chữ sau 2s và lặp lại")
// }, 2000);
// setTimeout(() => {
//     console.log("Hiện chữ sau 2s")
// }, 2000);





//🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️
//🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
//!                      4: Toán tử trong JS
/*
?            1: Toán tử số:
                +               ->  Cộng
                -               ->  Trừ
                *               ->  Nhân
                /               ->  Chia
                %               ->  Chia lấy dư
                **              ->  Lũy thừa
                ++              ->  Tăng 1 giá trị
                --              ->  Giảm 1 giá trị

?           2:  Toán tử gán:
Toán tử             =           x=y             x=y
Toán tử             +=          x+=y            x=x+y
Toán tử             -=          x-=y            x=x-y
Toán tử             *=          x*=y            x=x*y
Toán tử             /=          x/=y            x=x/y
Toán tử             %=          x%=y            x=x%y

?           3:  Toán tử so sánh:
Toán tử bằng (==): So sánh giá trị của hai biến và trả về true nếu bằng nhau, ngược lại trả về false. Ví dụ: a == b.

Toán tử khác (!=): So sánh giá trị của hai biến và trả về true nếu khác nhau, ngược lại trả về false. Ví dụ: a != b.

Toán tử lớn hơn (>): So sánh giá trị của hai biến và trả về true nếu biến đầu tiên lớn hơn biến thứ hai, ngược lại trả về false. Ví dụ: a > b.

Toán tử nhỏ hơn (<): So sánh giá trị của hai biến và trả về true nếu biến đầu tiên nhỏ hơn biến thứ hai, ngược lại trả về false. Ví dụ: a < b.

Toán tử lớn hơn hoặc bằng (>=): So sánh giá trị của hai biến và trả về true nếu biến đầu tiên lớn hơn hoặc bằng biến thứ hai, ngược lại trả về false. Ví dụ: a >= b.

Toán tử nhỏ hơn hoặc bằng (<=): So sánh giá trị của hai biến và trả về true nếu biến đầu tiên nhỏ hơn hoặc bằng biến thứ hai, ngược lại trả về false. Ví dụ: a <= b.


*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
// console.log("               Bài 4: Toán tử trong JS");

// console.log("       Toán tử số học")

// let a = 10
// let b = 5
// console.log("A có giá trị:", a, "và B có giá trị:", b)
// let phepCong = a + b
// console.log("Toán tử cộng:", phepCong)
// let phepTru = a - b
// console.log("Toán tử trừ:", phepTru)
// let phepNhan = a * b
// console.log("Toán tử nhân:", phepNhan)
// let phepChia = a / b
// console.log("Toán tử chia:", phepChia)
// let layDu = a % b
// console.log("Toán tử chia lấy dư:", layDu)
// let luythua = a ** b
// console.log("Toán tử lũy thừa:", luythua)



// console.log("       Toán tử so sánh")

// let a = 5;
// let b = 10;
// console.log("Ta có 2 biến A:", a, "và biến b:", b)

// console.log("a == b", a == b); // false
// console.log("a != b", a != b); // true
// console.log("a > b", a > b); // false
// console.log("a < b", a < b) //true