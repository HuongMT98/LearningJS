////!_______>>> Nội dung có trong bài này
/*
      ⁡⁣⁣⁢ IF ELSE
       SWITCH CASE
       Toán tử 3 ngôi (Ternary operator)
       VÒNG LẶP LOOP (for/       for-in /      for-of /      while /     do-while /      Vòng lặp lồng nhau)⁡
*/
////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧





////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// CÂU ĐIỀU KIỆN RẼ NHÁNH- TOÁN TỬ 3 NGÔI
////? Khi nào dùng if else: < > !==
////? Khi nào dùng switch case: Khi biết trước giá trị
////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢IF ELSE⁡


// var date = 2

// if (date === 2) {
//     console.log("Hôm nay là thứ 2")
// } else if (date === 3) {
//     console.log("Hôm nay là thứ 3")
// } else if (date === 4) {
//     console.log("Hôm nay là thứ 4")
// } else if (date === 5) {
//     console.log("Hôm nay là thứ 5")
// } else if (date === 6) {
//     console.log("Hôm nay là thứ 6")
// } else if (date === 7) {
//     console.log("Hôm nay là thứ 7")
// } else {
//     console.log("Hôm nay là chủ nhật")
// }




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  SWITCH CASE⁡


// var thu = 8

// switch (thu) {
//     case 2:
//         console.log('Thứ 2')
//         break
//     case 3:
//         console.log('Thứ 3')
//         break
//     case 4:
//         console.log('Thứ 4')
//         break
//     case 5:
//         console.log('Thứ 5')
//         break
//     case 6:
//         console.log('Thứ 6')
//         break
//     case 7:
//         console.log('Thứ 7')
//         break
//     case 8:
//         console.log('Chủ nhật')
//         break
//     default:
//         console.log('Không đúng')
// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Toán tử 3 ngôi⁡⁡ ⁡⁣⁣⁢(Ternary operator)⁡


// let course = {
//     name: "Toán",
//     coin: 1,
// }

// let result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
// console.log(result)
//--> Nếu điều kiện của vế thứ nhất đúng,sẽ lấy điều kiện của vế thứ 2 sau dấu ?

// let a = 1
// let b = 2
// let c = a > 0 ? a : b
//--> Kết quả sẽ lấy a vì a > 0, còn nếu a>1 thì sẽ lấy b
// console.log(c) // a = 1




////🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧
// ⁡⁢⁣⁢VÒNG LẶP LOOP ⁡⁡
/*
⁡⁣⁣⁢1: for : Lặp với điều kiện đúng
2: for in: Lặp qua key của đối tượng
3: for of: Lặp qua value của đối tượng
4: while: Lặp khi điều kiện đúng
5: do while: :Lặp 1 lần, sau đó lặp khi điều kiện đúng
6: Break và Continue trong vòng lặp
7: Vòng lặp lồng nhau⁡
*/



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢1: for : Lặp với điều kiện đúng⁡
// ⁡⁢⁢⁣Đề bài: Hãy tạo ra 1 dãy từ 1 đến 5⁡


// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }



// ⁡⁢⁢⁣Đề bài: Dùng vòng lặp for để lấy mảng⁡

// let myArray = [
//     { name: "Alice", age: 4 },
//     { name: "Bobby", age: 9 },
//     { name: "Charlie", age: 12 },
// ]
// let arrayLength = myArray.length
// for (let i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 2: for in: Lặp qua key của đối tượng⁡
// ⁡⁢⁢⁣Đề bài: VD1⁡


// let myInfo = {
//     name: "Nguyen Van A",
//     age: 28,
//     city: "Hanoi",
// }
// for (let i in myInfo) {
//     if (Object.hasOwnProperty.call(myInfo, i)) {
//         console.log(myInfo[i])
//     }
// }



// ⁡⁢⁢⁣Đề bài: VD2⁡


// let khoaHoc = {
//     tenKhoaHoc: 'JavaScript',
//     soTuan: 36,
//     giangVien: ['Trung', 'Duy'],
// }
// for (let j in khoaHoc) {
//     if ((khoaHoc, j)) {
//         console.log(khoaHoc[j])
//     }

// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 3: for of: Lặp qua value của đối tượng⁡
//⁡⁢⁢⁣ Đề bài: VD⁡
// let array = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// for (const value of Object.values(array)) {
//     console.log(value)
// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 4: while: Lặp khi điều kiện đúng⁡
//⁡⁢⁢⁣ Đề bài: VD in ra số từ 1 đến 10⁡


// let i = 0
// while (i < 10) {
//     i++
//     console.log(i)
// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 5: do while: :Lặp 1 lần, sau đó lặp khi điều kiện đúng⁡
// ⁡⁢⁢⁣Đề bài: VD in ra số lần nạp thẻ⁡


// let j = 0
// var isSuccess = false

// do {
//     j++
//     console.log('Nạp thẻ lần ' + j)

//     //*  Thành công
//     if (true) {
//         isSuccess = true;
//      //* Thất bại
//     } else {
//         isSuccess = false
//     }
// } while (!isSuccess && i < 3);



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 6: Break và Continue trong vòng lặp⁡
// ⁡⁢⁢⁣Đề bài: In ra số nguyên dương chia hết cho 3⁡


// for (let i = 0; i < 10; i++) {
//     if (i % 3 !== 0) {
//         continue;
//     }
//     console.log(i)
// }



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//⁡⁢⁣⁢ 7: Vòng lặp lồng nhau⁡
// var myArray = [
//     ['one', 'two'],
//     ['three', 'four'],
//     ['five', 'six'],
// ]
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }

