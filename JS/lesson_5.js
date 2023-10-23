////!_______>>> Nội dung có trong bài này:
/*
       ⁡⁣⁣⁢⁡⁣⁢⁣Array Method(Phương thức làm việc với mảng):⁡
       ⁡⁢⁣⁢⁡⁢⁣⁢1: forEach():⁡ ⁡⁢⁣⁡⁣⁣⁢lặp qua một mảng hoặc một đối tượng giống mảng⁡⁡
       ⁡⁢⁣⁢2: every()⁡ : ⁡⁣⁢⁡⁢⁣⁡⁣⁣⁢Dùng kiểm tra tất cả phần tử thỏa mãn điều kiện⁡⁡⁡
       ⁡⁢⁣⁢3: some() :⁡ ⁡⁣⁢⁡⁣⁣⁢Dùng kiểm tra điều kiện đúng chỉ duy nhất một phần tử⁡
       ⁡⁢⁣⁢4: find()⁡ : ⁡⁣⁢⁣⁡⁣⁣⁢Dùng tìm kiếm⁡
       ⁡⁢⁣⁢5: filter()⁡ : ⁡⁣⁢⁡⁣⁣⁢Dùng lọc ra các phần tử theo điều kiện⁡
*/
//🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧








////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢Array Method ⁡⁣⁣⁢(Phương thức làm việc với mảng)⁡
/*
Có nhiều phương thức khác nhau để làm việc với mảng trong các ngôn ngữ lập trình. Dưới đây là một vài phương thức phổ biến:

⁡⁢⁣⁢1. Truy cập phần tử: Sử dụng chỉ số của mỗi phần tử để truy cập và thay đổi giá trị của nó. Ví dụ: ⁡
let array = [
       { name: "John", age: 34 },
       { name: "Jane", age: 29 },
       { name: "Alice", age: 27 },
]
console.log(array[1])

⁡⁢⁣⁢2. Lặp qua mảng: Sử dụng vòng lặp để duyệt qua tất cả các phần tử trong mảng và thực hiện một hành động nào đó trên từng phần tử. Ví dụ:⁡
let array = [
       { name: "John", age: 34 },
       { name: "Jane", age: 29 },
       { name: "Alice", age: 27 },
]
for (let i = 0; i < array.length; i++) {
       const element = array[i];
       console.log(element)
}

⁡⁢⁣⁢3. Thêm phần tử: Sử dụng phương thức như push (thêm ở cuối mảng) hoặc unshift (thêm ở đầu mảng) để thêm một phần tử mới vào mảng. Ví dụ: ⁡
let fruits = ['táo', 'lê', 'bơ'];
fruits.push("apple", "banana", "orange"); console.log(fruits); // ⁡⁣⁢⁣['táo', 'lê', 'bơ',"apple", "banana", "orange"]⁡

⁡⁢⁣⁢4. Xóa phần tử: Sử dụng phương thức như pop (xóa phần tử cuối mảng) hoặc shift (xóa phần tử đầu mảng) để xóa một phần tử khỏi mảng. Ví dụ:⁡
let fruits = ['táo', 'lê', 'bơ'];
fruits.pop();
console.log(fruits); // ⁡⁣⁢⁣táo,lê⁡

⁡⁢⁣⁢5. Sắp xếp mảng: Sử dụng các phương thức như sort để sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần. Ví dụ: ⁡
let array = [2, 6, 8, 7, 3, 5]
let sapXepMang = array.sort()
console.log(sapXepMang)

⁡⁢⁣⁢6. Tìm kiếm phần tử: Sử dụng các phương thức như indexOf để tìm kiếm một phần tử trong mảng và trả về chỉ số của phần tử đó. Ví dụ:⁡
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
let index = fruits.indexOf('cherry');
console.log(index); // ⁡⁣⁢⁣Kết quả: 2⁡

⁡⁢⁣⁢7. Đảo ngược mảng: Sử dụng phương thức reverse để đảo ngược thứ tự các phần tử trong mảng. Ví dụ:
let fruits = [
       { name: "Apple", color: "red" },
       { name: "Banana", color: "yellow" },
]
fruits.reverse();
console.log(fruits)
*/






////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢1: forEach()⁡
/*⁡
       ⁡⁣⁣⁢Vòng lặp foreach() trong JavaScript được sử dụng để lặp qua một mảng hoặc một đối tượng giống mảng.Nó tương tự như vòng lặp for, nhưng cú pháp của nó đơn giản hơn và nó có thể được sử dụng để lặp qua các đối tượng không có chỉ số.⁡
              array.forEach(function (element, index, array) {
                     // Do something with the element
              });
*/
//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 1:⁡

// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// courses.forEach(function (course, index) {
//        console.log(index, course)
// });


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 2:⁡

// const hocKy = [
//        { monHoc: "Toán", diemHocKy: 6.5 },
//        { monHoc: "Lý", diemHocKy: 8.4 },
//        { monHoc: "Hóa", diemHocKy: 9.2 },
// ];
// hocKy.forEach(function (mang, index) {
//        console.log(index, mang);
// });


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 3:⁡

// let arr = ['A', 'B', 'C'];
// arr.forEach(function (mangVD3, index) {
//        console.log(index, mangVD3)
// })




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢2: every()⁡ : ⁡⁣⁢⁣Dùng kiểm tra tất cả phần tử thỏa mãn điều kiện⁡
/*
      ⁡⁣⁣⁢ Để sử dụng phương thức `every()` trong JavaScript, bạn cần truyền vào một hàm để kiểm tra từng phần tử của mảng. Phương thức `every()` sẽ trả về `true` nếu tất cả các phần tử trong mảng đáp ứng điều kiện được xác định bởi hàm đó, và ngược lại sẽ trả về `false`.

              let arrEvery = [1, 2, 3, 4, 5];
              let resultEvery = arrEvery.every(function (element) {
                     return element > 0;
              });
              console.log(resultEvery); // true⁡
 */
//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 1: Nếu bạn muốn kiểm tra xem liệu tất cả các phần tử trong mảng có độ dài lớn hơn 3 hay không, bạn có thể sử dụng phương thức `every()` như sau:⁡

// let arr = ['apple', 'banana', 'cherry'];

// let result = arr.every(function (element) {
//        return element.length > 3;
// });

// console.log(result); // false

//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 2: Kiểm tra xem bạn có được học sinh giỏi không⁡

// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// let hocGioi = courses.every(function (course, index) {
//        return course.grade >= 80;
// })
// console.log('Bạn có học giỏi không: ' + hocGioi) // false




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢3: some()⁡ : ⁡⁣⁢⁣Dùng kiểm tra điều kiện đúng chỉ duy nhất một phần tử⁡
/*     ⁡⁢⁢⁡⁣⁣⁢Phương thức some() được sử dụng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được chỉ định bởi một hàm callback. Nếu có ít nhất một phần tử thỏa mãn điều kiện, phương thức some() sẽ trả về giá trị true, ngược lại sẽ trả về giá trị false.
       Cú pháp của phương thức some() như sau:⁡⁡
              array.some(function(element, index, array), thisArg);
*/

//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢⁢⁣Ví dụ 1: Kiểm tra xem có số nào trong mảng lớn hơn 3 không⁡

// const numbersSome = [1, 2, 3, 4, 5];
// const resultSome = numbersSome.some(numbersSome => numbersSome > 3);
// console.log(resultSome); // true




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢4: find()⁡ : ⁡⁣⁢⁣Dùng tìm kiếm⁡
/*
       ⁡⁣⁣⁢Phương thức find() trong lập trình là một phương thức được sử dụng để tìm kiếm một chuỗi ký tự cụ thể trong một chuỗi khác. Phương thức này trả về chỉ số của ký tự đầu tiên của chuỗi con được tìm thấy, hoặc -1 nếu chuỗi con không được tìm thấy.⁡




 */
//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢⁢⁣Ví dụ 1:⁡


// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// let diemCao = courses.find(function (course, index) {
//        return course.grade >= 80
// })
// console.log('Điểm cao trên 80: ' + diemCao.name + ' và có điểm số là: ' + diemCao.grade)

//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢⁢⁣Ví dụ 2: Tìm kiếm một chuỗi con trong một chuỗi⁡

// const trees = [
//        "birch",
//        "maple",
//        "oak",
//        "poplar"
// ];
// const resultFind = trees.find(tree => tree.startsWith("m"));
// console.log(resultFind)




////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
// ⁡⁢⁣⁢5: filter()⁡ : ⁡⁣⁢⁣Dùng lọc ra các phần tử theo điều kiện⁡
/*
       ⁡⁣⁣⁢Phương thức filter() được sử dụng để lọc các phần tử của mảng thông qua một điều kiện nào đó. Phương thức này trả về một mảng mới chỉ chứa các phần tử thỏa mãn điều kiện đó.

       Cú pháp của phương thức filter() như sau:⁡
             ⁡⁣⁢⁣ let newArray = array.filter(callback(element, index, array));⁡

                           ⁡⁢⁣⁢ or⁡

              ⁡⁣⁢⁣let newArray = array.filter((element, index, array) => {
                     // do something with element and/or index
              })⁡
*/
//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ:⁡

// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// let diemCao = courses.find(function (course) {
//        return course.grade >= 80
// })
// console.log('Điểm cao trên 80: ' + diemCao.name + ' và có điểm số là: ' + diemCao.grade)


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ:⁡

// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// let diemKha = courses.filter(function (course) {
//        return course.grade < 90 && course.grade > 70
// })
// console.table(diemKha);



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ:⁡

// const deciduous = [
//        { name: "birch", count: 4 },
//        { name: "maple", count: 5 },
//        { name: "oak", count: 2 }
// ];
// let newArray = deciduous.filter((element, index, array) => {
//        console.log(index, element, array)
// })


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ: Dùng hàm filter() để tìm số chia hết cho 2⁡

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var chiaHet = numbers.filter(function (element) {
//        return element % 2 === 0;
// });
// console.table(chiaHet); // [2, 4, 6, 8, 10]


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢  ⁡⁢⁢⁣Ví dụ: tìm phương thức hợp lý tìm môn có điểm yêu thích cao hơn 5 trong mảng⁡

// const sports = [
//        {
//               name: 'Bóng rổ',
//               like: 6
//        },
//        {
//               name: 'Bơi lội',
//               like: 5
//        },
//        {
//               name: 'Bóng đá',
//               like: 10
//        },
// ]
// function getMostFavoriteSport() {
//        return sports.filter(function (score) {
//               return score.like > 5
//        })
// }
// console.log(getMostFavoriteSport(sports))



////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢6: map()⁡: ⁡⁣⁢⁣Dùng để thay đổi element trong Array⁡
/*
       ⁡⁣⁣⁢Hàm map() được sử dụng để tạo một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng hiện có.
       ⁡⁣⁣⁢Dưới đây là cách sử dụng hàm map() trong JavaScript:
                     ⁡⁢⁣⁢// Khai báo một mảng các số⁡
              let numbers = [1, 2, 3, 4, 5];
                     ⁡⁢⁣⁢// Khai báo một hàm để tăng mỗi số lên 1⁡
              function increase(number) {
                     return number + 1;
              }
                     ⁡⁢⁣⁢// Sử dụng hàm map() để áp dụng hàm increase() cho từng phần tử của mảng numbers⁡
              let increasedNumbers = numbers.map(increase);
                     ⁡⁢⁣⁢// In kết quả⁡
              console.log(increasedNumbers); // [2, 3, 4, 5, 6]
*/

//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ dùng phương thức map() để thêm vào mảng monHocGioi là môn học nào có điểm số lớn hơn 80⁡

// var courses = [
//        { name: "Toán", grade: 90 },
//        { name: "Lý", grade: 85 },
//        { name: "Hóa", grade: 76 },
//        { name: "Anh Văn", grade: 82 },
// ]
// function courseHandler(course) {
//        return {
//               name: `Tên môn học: ${course.name}`,
//               grade: course.grade,
//               monHocGioi: course.grade > 80
//        }
// }
// let newCourse = courses.map(courseHandler) //!--> Phương thức map() cần một đối số là một function
// console.log(newCourse)


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁡⁢⁢⁣Ví dụ 1: Nhân đôi giá trị của mảng sau⁡

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(number => number * 2);
// console.table(doubledNumbers); // ⁡⁣⁢⁣[2, 4, 6, 8, 10]⁡


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ 2: Tạo một mảng mới với các phần tử được làm tròn:⁡

// const lamTron = [1.1, 2.2, 3.3, 4.4, 5.5];
// const roundedNumbers = lamTron.map(number => Math.round(number));
// console.table(roundedNumbers); // ⁡⁣⁢⁣[1, 2, 3, 4, 5]⁡


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ: dùng hàm map() tính diện tích hình tròn trong mảng⁡

// let arrBanKinh = [10, 30, 50];

// // ⁡⁢⁣⁢Tạo hàm tính diện tích⁡
// function tinhDienTich(banKinh) {
//        return Math.floor(Math.PI * banKinh * banKinh);
// }
// // ⁡⁢⁣⁢Sử dụng map() tạo một mảng mới, và áp dụng hàm tính diện tích cho từng phần tử trong mảng arrBanKinh⁡
// let arrDienTich = arrBanKinh.map(tinhDienTich);

// // ⁡⁢⁣⁢In kết quả⁡
// console.table(arrDienTich);


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ: Viết hoa các mảng sau và trả về những mảng mới⁡

// const strings = ["hello", "world", "javascript"];
// const upperStrings = strings.map(string => string.toUpperCase());
// console.log(upperStrings); // ["HELLO", "WORLD", "JAVASCRIPT"]





// ////🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
//  ⁡⁢⁣⁢7: Array reduce()⁡: ⁡⁣⁢⁣Dùng để trả về giá trị duy nhất
/*
       ⁡⁣⁣⁢Phương thức reduce trong JavaScript là một phương thức được sử dụng trên một mảng để tính toán giá trị đầu ra duy nhất dựa trên các phần tử trong mảng. Phương thức này nhận vào một hàm callback và một giá trị khởi tạo làm tham số đầu tiên.
       Cú pháp của phương thức reduce như sau:⁡
              ⁡⁣⁢⁣array.reduce(⁡⁢⁣⁢accumulator⁡,⁡⁢⁣⁣currentValue⁡,⁡⁣⁢⁢initialValue⁡)⁡
.
       ⁡⁣⁣⁢Trong đó:⁡
              ⁡⁢⁣⁢accumulator⁡ : là tổng cộng
              ⁡⁢⁣⁣currentValue⁡ : là giá trị hiện tại
              ⁡⁣⁢⁢initialValue⁡ : là giá trị khởi tạo
              ⁡
       ⁡⁣⁣⁢Ví dụ sử dụng phương thức reduce để tính tổng các phần tử trong một mảng:⁡
              ⁡⁣⁢const numbers = [1, 2, 3, 4, 5];
              const sum = numbers.reduce((⁡⁢⁣⁢accumulator⁡, ⁡⁢⁣⁣currentValue⁡) => ⁡⁢⁣⁢accumulator⁡ + ⁡⁢⁣⁣currentValue⁡, ⁡⁣⁢⁢0⁡);
              console.log(sum); // ⁡⁣⁢⁣Output: 15⁡
*/

//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ:⁡

// let arr = [1, 2, 3, 4, 5];
// //     ⁡⁢⁣⁢Cách 1: Dùng hàm reduce() để tính tổng⁡⁡
// let sum = arr.reduce((x, y) => x + y);
// console.log('Dùng hàm reduce() để tính tổng của mảng:' + sum);


// //     ⁡⁢⁣⁢Cách 2: Dùng vòng lặp để tìm tổng⁡⁡
// var sum1 = 0
// for (let i = 0; i < arr.length; i++) {
//        sum1 += arr[i]
// } console.log('⁣Dùng vòng lặp để tìm tổng: ' + sum1)



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢⁢⁣Ví Dụ: Dùng phương thức reduce() và vòng lặp tính tổng⁡⁡
// var totalCoin = [
//        { coinName: "USDT", amount: 1000 },
//        { coinName: "BTC", amount: 500 },
//        { coinName: "ETH", amount: 200 },
// ]

////    ⁡⁢⁣⁢ Cách 1: Dùng vòng lặp for of tính tổng⁡
// var tongCoin = 0
// for (const tong of totalCoin) {
//        tongCoin += tong.amount
// }
// console.log('Dùng vòng lặp tính tongCoin: ' + tongCoin)


////     ⁡⁢⁣⁢Cách 2: ⁡⁢⁣⁢Dùng phương thức reduce()⁡
// var tongCoin1 = totalCoin.reduce((a, b) => a + b.amount, 0)
// console.log('Phương thức reduce() tính tongCoin1: ' + tongCoin1)



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
// ⁡⁢⁢⁡⁢⁢⁣Ví dụ: Dùng phương thức reduce() tính tổng tiền thưởng⁡

// var sports = [
//        { name: "Tennis", price: 80000 },
//        { name: "Football", price: 60000 },
//        { name: "Swimming", price: 90000 },
// ]

// let tongTienThuong = sports.reduce((a, b) => a + b.price, 0)
// console.log(tongTienThuong)



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ: Dùng phương thức reduce() tính tổng huy chương vàng⁡

// var sports = [
//        {
//               name: 'Bơi lội', gold: 11
//        },
//        {
//               name: 'Boxing', gold: 3
//        },
//        {
//               name: 'Đạp xe', gold: 4
//        },
//        {
//               name: 'Đấu kiếm', gold: 5
//        },
// ]
// //     ⁡⁢⁣⁢Cách 1 dùng function tính tổng⁡
// function getTotalGold(mang) {
//        return mang.reduce(function (a, b) {
//               return a + b.gold
//        }, 0)
// } console.log('Dùng function tính tổng: ' + getTotalGold(sports)) // Output: 23


// //     ⁡⁢⁣⁢Cách 2 dùng phương thức reduce tính tổng⁡
// let tongVang = sports.reduce((a, b) => a + b.gold, 0)
// console.log('Dùng phương thức reduce tính tổng: ' + tongVang)



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Ví dụ: dùng reduce() tính tổng tài sản⁡

// var arr = [
//        { name: "Alice", age: 30, taiSan: 5000000 },
//        { name: "Bobby", age: 27, taiSan: 3000000 },
//        { name: "Charlie", age: 35, taiSan: 4000000 },
// ]
// let tinhTaiSan = arr.reduce((a, b) => a + b.taiSan, 0)
// console.log(tinhTaiSan)



//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Dùng phương thức reduce tìm số lớn nhất trong mảng sau⁡

// let arr = [10, 5, 8, 3, 12];
// let max = arr.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue));
// console.log(max); // Output: 12


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Tìm số nhỏ nhất trong mảng sau:⁡

// let array = [5, 2, -9, -3, 2]
// let timSoNhoNhat = array.reduce((min, b) => Math.min(min, b))
// console.log(timSoNhoNhat) // -9


//✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘✖️✖️🔘🔘
//     ⁡⁢⁢⁣Làm phẳng mảng từ mảng sâu bằng reduce⁡
// let depthArray = [
//        1, 2, [3, 4], 5, 6, [7, 8, 9]
// ]
// let flatArray = depthArray.reduce((flatOutput, depthCurrent) => flatOutput.concat(depthCurrent), [])



