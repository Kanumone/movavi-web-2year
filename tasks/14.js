function getSumAndMultOfArray(arr) {
    let s = 0;
    let p = 1;
    arr.forEach(function (num) {
        s += num;
        p *= num;
    });
    console.log(s, p)
}

const arr = [1, 2, 3];
getSumAndMultOfArray(arr);
