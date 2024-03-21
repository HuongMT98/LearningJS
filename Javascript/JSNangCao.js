// **************************************
// **************************************
// **************************************

//! 1 : HTTP Request với JS

// let request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//   if (request.readyState === 4 && request.status == 200) {
//     console.log("check request", request);
//   } else {
//     console.log(`status: ${request.status}`);
//   }
// };
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// request.send();

// **************************************
// **************************************
// **************************************

//! 2:Callback Functions

// const callback = (error, data) => {
//   if (error) {
//     console.log("Gọi CALLBACK với lỗi", error);
//   }
//   if (data) {
//     console.log("Gọi CALLBACK với dữ liệu", data);
//   }
// };

// function getTodos(callback) {
//   let request = new XMLHttpRequest();

//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = request.responseText;
//       callback(undefined, data);
//     }
//     if (request.readyState === 4 && request.status !== 200) {
//       callback("Lỗi", undefined);
//     }
//   };
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   request.send();
// }
// console.log(1);
// getTodos(callback);
// console.log(2);

// **************************************
// **************************************
// **************************************

//! 3: Using JSON data - Đọc File JSON Với Javascript
// const JSONTest = (error, data) => {
//   if (error) {
//     console.log("Callback JSON với lỗi", error);
//   }
//   if (data) {
//     console.log("Callback JSON với dữ liệu", data);
//   }
// };

// function getJSON(id, callback) {
//   let request = new XMLHttpRequest();

//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const dataJSON = JSON.parse(request.responseText);
//       callback(undefined, dataJSON);
//     }
//     if (request.readyState === 4 && request.status !== 200) {
//       callback("Lỗi", undefined);
//     }
//   };
//   request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//   request.send();
// }
// getJSON(1, JSONTest);

// **************************************
// **************************************
// **************************************

//! 4: Promise

// PROMISE EXAMPLE
// const promiseExp = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ name: "Huong", year: 1998 });
//     reject("ERROR");
//   });
// };
// promiseExp()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// **************************************
// const PromiseF = (error, data) => {
//   if (error) {
//     console.log("Promise với lỗi", error);
//   }
//   if (data) {
//     console.log("Promise với dữ liệu", data);
//   }
// };

// function FunctionPromise(value) {
//   return (request = new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();

//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const dataJSON = JSON.parse(request.responseText);
//         resolve(dataJSON);
//       }
//       if (request.readyState === 4 && request.status !== 200) {
//         reject("Có lỗi xãy ra rồi");
//       }
//     };
//     request.open(
//       "GET",
//       `https://jsonplaceholder.typicode.com/todos/${value}`,
//       true
//     );
//     request.send();
//   }));
// }
// FunctionPromise(1)
//   .then((data1) => {
//     console.log(data1);
//     return FunctionPromise(2);
//   })
//   .then((data2) => {
//     console.log(data2);
//     return FunctionPromise(3);
//   })
//   .then((data3) => {
//     console.log(data3);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// **************************************
// **************************************
// **************************************

//! 5: Fetch API

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// **************************************
// **************************************
// **************************************

//! 6:Async & Await

//* Cách 1: Su dụng async & await
// const getNewToDo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   if (response && response.status !== 200) {
//     throw new Error("Something Wrong", response.status);
//     //reject
//   }

//   let data = await response.json();
//   return data;
//   //resolve
// };

// getNewToDo(1)
//   .then((data) => {
//     console.log("-> Get data", data);
//   })
//   .catch((error) => {
//     console.log("-> Check Error: ", error.message);
//   });

//*   Cách 2: Try and Catch
// const tryAndCatch = async (id) => {
//   try {
//     let response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );
//     if (response && response.status !== 200) {
//       throw new Error("Something Wrong", response.status);
//       //reject
//     }
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("-> Check Error: ", error.message);
//   }
// };

// tryAndCatch(1)
//   .then((data) => {
//     console.log("-> Get data", data);
//   })
//   .catch((error) => {
//     console.log("-> Check Error: ", error.message);
//   });

// **************************************
// **************************************
// **************************************

//! 7:Destructuring Assignment : Giản lượt hóa

let arr = [1, 2, 3, 4, 5]
console.log("check arr: " + arr)
let arr2 = [...arr, 6, 7, 8]
console.log("check arr2: " + arr2)

let state = {
  name: "Huong",
  address: "HCM",
  city: "Hồ Chi Minh",
}
let { name, address, city } = state
console.log("Check Key", name, address, city)
