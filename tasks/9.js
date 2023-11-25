function erase (data) {
    // const res = [];
    // data.forEach(function (e) {
    //     if (e !== undefined && e !== false && e !== null && e !== '') {
    //         res.push(e);
    //     }
    // });
    // return res;
    const arr = data.filter(function (e) {
        return e;
    });
    return arr;
}

let data1 = [0, 1, false, 2];
const res1 =  erase(data1);
console.log(res1);
let data2 = [0, 1, false, 2, null, 'qwe'];
const res2 =  erase(data2);
console.log(res2);
let data3 = [0, 1, false, 2, undefined, '', 3, null, 'qwe'];
const res3 =  erase(data3);
console.log(res3);