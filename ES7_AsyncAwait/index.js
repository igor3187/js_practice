// const myFunc = (async () => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => res('Hello'), 2000)
//     });
//
//     const error = false;
//     if (!error) {
//         const res = await promise; // wait until promise is resolve
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// });
//
// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//

const getUsers = async () => {
  //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //only proceed once its resolved
  const data = await response.json();
  //only proceed once second promise is resolved
  return data;
};

getUsers()
    .then(users => console.log(users));
