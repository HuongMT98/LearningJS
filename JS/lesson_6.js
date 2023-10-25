////!_______>>> Nội dung có trong bài này:
/*
       ⁡⁣⁣⁢⁡⁣⁢CallBack⁡: là hàm, được truyền qua đối số, được gọi lại trong hàm nhận đối số
*/
//🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧⁡

//     ⁡⁢⁢⁣Ví dụ: Dùng callback để tạo bộ đếm từ 0 - 5⁡

// function countToFive(start, callback) {
//        if (start <= 5) {
//               console.log(start);
//               setTimeout(function () {
//                      countToFive(start + 1, callback);
//               }, 1000);
//        } else {
//               callback();
//        }
// }

// countToFive(0, function () {
//        console.log("Đếm xong.");
// });






//     ⁡⁢⁢⁣Ví dụ 1:  tự tạo phương thức map2 hoạt động tương tự map⁡

// let courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 }
// ]
// // ⁡⁣⁣⁢Tự viết phương thức map2⁡
// Array.prototype.map2 = function (callback) {
//        let ouput = []
//        let arrarLength = courses.length
//        for (let i = 0; i < arrarLength; i++) {
//               let result = callback(this[i], i)
//               ouput.push(result)
//        }
//        return ouput
// }
// //-->  ⁡⁢⁣⁡⁣⁣⁢Tự định nghĩa map2 ⁡⁡
// courses.map2(function (khoaHoc) {
//        console.log(khoaHoc)
// })

// let yo = courses.map2(function (diem) {
//        return courses = "Điểm : " + diem.name + " " + diem.grade
// })
// console.log(yo)





//     ⁡⁢⁢⁣Ví dụ 2:  tự tạo phương thức myMap hoạt động tương tự map⁡

// Array.prototype.myMap = function (cb) {
//        let outPut = []
//        let arrarLength = numbers.length
//        for (let i = 0; i < arrarLength; i++) {
//               let result = cb(this[i], i)
//               outPut.push(result)
//        }
//        return outPut
// }
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//        return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//        return number * index;
// })) // Output: [0, 2, 6]



