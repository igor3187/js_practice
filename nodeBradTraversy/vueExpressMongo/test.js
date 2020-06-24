let arr = [1,2, 'a', 'b'];

let newArr = arr.filter((el) => {
    if (typeof el === 'number') {
        return el;
    }
});

console.log(newArr);

