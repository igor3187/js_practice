// //basic structure
// // (function () {
// //     //declare private vars and function
// //    return {
// //         //declare public vars and functions
// //   }
// // })();
//
// // const UICtrl = (function () {
// //     let text = 'Hello World';
// //
// //     const changeText = function () {
// //         const element = document.querySelector('h1');
// //         element.textContent = text;
// //     };
// //
// //     return {
// //         callChangeText: function () {
// //             changeText();
// //             console.log(text);
// //         }
// //     }
// // })();
// // UICtrl.callChangeText();
//
// const itemCtrl = (function () {
//     let data = [];
//
//     function add(item) {
//         data.push(item);
//         console.log('Item Added');
//     }
//
//     function get(id) {
//         return data.find(item => item.id === id)
//     }
//
//     return {
//         add: add,
//         get: get
//     }
// })();
//
// itemCtrl.add({id: 1, name: 'John'});
// itemCtrl.add({id: 2, name: 'Mark'});
// console.log(itemCtrl.get(1));
// console.log(itemCtrl.get(2));
