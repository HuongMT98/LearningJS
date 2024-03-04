//!                      1: Chuỗi và làm việc với chuỗi

/*
1: Length
2: Find index
3: Cut string slice
4: Replace
5: Convert to upper case
6: Convert to lower case
7: Trim     Bỏ ký tự thừa 2 đầu
8: Split    Tách chuỗi thành mảng từ điểm chung
9: Get character by index
*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣

// let chuoi = "Nguyen Van A "
// console.log(chuoi)


// //?  1: Length
// console.log("Độ dài chuỗi:", chuoi.length)  // Output: 10

// //?  2: Find Index
// console.log("Tìm kiếm ký tự 'A' trong chuỗi", chuoi.indexOf('A'))

// //?  3: Cut String
// console.log("Cut string:", chuoi.slice(6))

// //?  4: Replace
// console.log("Thay thế ký tự 'A' bằng 'B': ", chuoi.replace('A', 'B'))

// //?  5: Convert to upper case
// console.log("Chuyển hoa chuỗi: ", chuoi.toUpperCase())

// //?  6: Convert to lower case
// console.log("Chuyển thường chuỗi: ", chuoi.toLowerCase())

// //?  7: Trim : Bỏ khoảng trắng ký tự thừa
// console.log("Trim : Bỏ khoảng trắng ký tự thừa chuỗi:", chuoi.trim())

// //?  8: Split
// let languages = 'JS,PHP,Java'
// console.log(languages.split(','))

// //?  9: Get character by index
// let myString = 'Thanh Hưởng'
// console.log(myString[2])




//🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️
//🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫

//!                      2: Mảng (Array) và làm việc với mảng
/*
*1:      To String          Biến mảng thành chuỗi

*2:      Join               Thay dấu , thành ký tự bất kỳ

*3:      Pop                Xóa phần tử cuối mảng và trả lại chính nó

*4:      Push               Thêm phần tử vào cuối mảng và trả lại độ dài

*5:      Shift              Xóa phần tử đầu tiên của mảng

*6:      Unshift            Thêm phần tử vào đầu mảng và trả lại độ dài

*7:      Splice             Xóa hoặc thêm phần tử vào mảng
    Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)


*8:      Concat             Nối mảng

*9:      Sclicing           Cắt element của mảng

*/
//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
// let arr = [
//     'JS',
//     'PHP',
//     'Java',
//     'React'
// ]
// console.log("Mảng:", arr)

// //?  1: To String
// console.log("To String:", arr.toString())

// //?  2: Join
// console.log('Join: ', arr.join(' - '));

// //?  3: Pop
// console.log("Pop", arr.pop())

// //?  4: Push
// console.log("Push", arr.push('Dart', 'Ruby'))

// //?  5: Shift
// console.log("Shift", arr.shift())

// //?  6: Unshift
// console.log("Unshift", arr.unshift('Python'))

// //?  7: Splice
// var fruits = ['Banana', 'Orange', 'Apple', 'Durian'];
// fruits.splice(2, 0, "Cherry"); // Insert at index 2
// console.log(fruits);

// //?  8: Concat
// let arr1 = ["C++", "Swift"]
// console.log("Concat: ", arr.concat(arr1))

// //?  9: Slice
// console.log("Slice", arr.slice(1, 3))





//🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️
//🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫

//!             3: Hàm  Function
/*
*   Trong JavaScript, một hàm (function) là một khối mã được đặt tên hoặc không tên, có thể được gọi để thực thi một tác vụ cụ thể. Hàm có thể nhận đầu vào (tham số) và trả về kết quả (giá trị trả về)

?        function name(params) {}
*/

//1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣

//? Ví dụ

// function showDialog(thamso) {
//     alert('Function')
// }
// showDialog()


//? Ví dụ


// function addNum(a, b) {
//     return a + b;
// }
// console.log(addNum(5, 6))


//? Ví dụ
// let dem = 10;
// function boom() {
//     let demNguoc = setInterval(() => {
//         console.log('Bắt đầu đếm ngược:', dem)
//         dem--
//         if (dem === 0) {
//             clearInterval(demNguoc)
//             console.log('BOOM!')
//         }
//     }, 1000);

// }
// boom()

