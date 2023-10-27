/*       
                        Tài liệu DOM: https://www.w3schools.com/js/js_htmldom.asp

                        DOM chỉ có 3 thành phần:
                        Element
                        Atribute
                        Text
*/

let h2Node = document.getElementById('dom')


let mangNumber = [
    1, 2, 3, 5, 8, 7,
]


// const ${ 1: TênBiến } = ${ 2: TênMảngCha }.reduce((acc, cur) => {
//     return [...acc, ...cur.${ 3: TênMảngCon }];
// }, []);







let mangHaiChieu = [
    {
        topic: "ReactJS",
        posts: [
            { postID: "id1", title: "title1" },
            { postID: "id2", title: "title2" },
        ],
        studentName: [
            { studentID: "id1", name: "Thanh" },
            { studentID: "id2", name: "Phong" },
            { studentID: "id2", name: "Út" },
            { studentID: "id2", name: "Thành" },
        ],
    },
    {
        topic: "Vue.js",
        posts: [
            { postID: "id3", title: "title3" },
            { postID: "id4", title: "title4" },
        ],
        studentName: [
            { studentID: "id1", name: "Trần" },
            { studentID: "id2", name: "Tịnh" },
            { studentID: "id2", name: "Hai" },
            { studentID: "id2", name: "Ngữ" },
        ],
    },
]


const flatMang = mangHaiChieu.reduce((acc, cur) => {
    return [...acc, ...cur.posts, ...cur.studentName];
}, []);
console.log(flatMang)



