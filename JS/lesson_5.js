////!_______>>> Nội dung có trong bài này:
/*
       ⁡⁣⁣⁢Array Method(Phương thức làm việc với mảng)
       SWITCH CASE
       Toán tử 3 ngôi(Ternary operator)
       VÒNG LẶP LOOP(for/       for-in /      for-of /      while /     do-while /      Vòng lặp lồng nhau)⁡
*/
////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧








////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Array Method ⁡⁣⁣⁢(Phương thức làm việc với mảng)⁡


// var courses = [
//     { name: "Toán", grade: 90 },
//     { name: "Lý", grade: 85 },
//     { name: "Hóa", grade: 76 },
//     { name: "Anh Văn", grade: 82 },
// ]




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢1: forEach()⁡
// courses.forEach(function (course, index) {
//     console.log(index, course)
// });




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢2: every()⁡ : ⁡⁣⁢⁣Dùng kiểm tra tất cả phần tử thỏa mãn điều kiện⁡
// let hocGioi = courses.every(function (course, index) {
//     return course.grade >= 80;
// })
// console.log('Bạn có học giỏi không: ' + hocGioi)




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢3: some()⁡ : ⁡⁣⁢⁣Dùng kiểm tra điều kiện đúng chỉ duy nhất một phần tử⁡
// let hocKha = courses.some(function (course, index) {
//     return course.grade >= 70
// })
// console.log('Bạn có học khá không: ' + hocKha)




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢4: find()⁡ : ⁡⁣⁢⁣Dùng tìm kiếm⁡
// let diemCao = courses.find(function (course, index) {
//     return course.grade >= 80
// })
// console.log('Điểm cao trên 80: ' + diemCao.name + ' và có điểm số là: ' + diemCao.grade)




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢5: filter()⁡ : ⁡⁣⁢⁣Dùng lọc ra các phần tử theo điều kiện⁡
// let dkDiemChung = courses.filter(function (course, index) {
//     return course.grade < 80 && course.grade > 70
// })
// console.table(dkDiemChung);




// ⁡⁢⁢⁣Ví dụ: tìm phương thức hợp lý tìm môn có điểm yêu thích cao hơn 5 trong mảng⁡


// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport() {
//     return sports.filter(function (score) {
//         return score.like > 5
//     })
// }
// console.log(getMostFavoriteSport(sports))




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢6: map()⁡: ⁡⁣⁢⁣Dùng để thay đổi element trong Array⁡
// function courseHandler(course) {
//     return {
//         name: `Tên môn học: ${course.name}`,
//         grade: course.grade,
//         monHocGioi: course.grade > 80
//     }
// }
// let newCourse = courses.map(courseHandler) //!--> Phương thức map() cần một đối số là một function
// console.log(newCourse)




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢7: Array reduce()⁡: ⁡⁣⁢⁣Dùng để trả về giá trị duy nhất⁡
// let arr = [1, 2, 3, 4, 5];

//--> ⁡⁣⁢⁣Dùng hàm reduce() để tính tổng⁡
// let sum = arr.reduce((x, y) => x + y);
// console.log('⁡⁣⁢⁣Dùng hàm reduce() để tính tổng của mảng:' + sum);



//--> ⁡⁣⁢⁣Dùng vòng lặp để tìm tổng⁡
// for (let i = 0; i < arr.length; i++) {
//        var sum1 = 0
//        sum1 += arr[i]
// } console.log('⁣Dùng vòng lặp để tìm tổng: ' + sum1)


// ⁡⁢⁢⁣Ví Dụ: Dùng phương thức reduce() và vòng lặp tính tổng⁡⁡
// var totalCoin = [
//        { coinName: "USDT", amount: 1000 },
//        { coinName: "BTC", amount: 500 },
//        { coinName: "ETH", amount: 200 },
// ]

//--> ⁡⁣⁢⁡⁢⁣⁢Dùng vòng lặp for of tính tổng⁡⁡⁡
// var tongCoin = 0
// for (const tong of totalCoin) {
//        tongCoin += tong.amount
// }
// console.log('Dùng vòng lặp tính tongCoin: ' + tongCoin)



//--> ⁡⁢⁣⁢Dùng phương thức reduce()⁡
// var tongCoin1 = totalCoin.reduce((a, b) => a + b.amount, 0)
// console.log('Phương thức reduce() tính tongCoin1: ' + tongCoin1)




// ⁡⁢⁢⁡⁢⁢⁣Ví dụ: Dùng phương thức reduce() tính tổng tiền thưởng⁡
// var sports = [
//        { name: "Tennis", price: 80000 },
//        { name: "Football", price: 60000 },
//        { name: "Swimming", price: 90000 },
// ]

// let tongTienThuong = sports.reduce((a, b) => a + b.price, 0)
// console.log(tongTienThuong)



