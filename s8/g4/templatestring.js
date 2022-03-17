"use strict";
let nome = 'pippo';
let job = 'developer';
console.log(`il mio nome è: ${nome} e il mio lavoro è ${job}`);
let array = [4, 56, 23, 45];
let filter = array.filter(function (number) {
    return number > 40;
});
let array1 = [12, 20, 30];
let map1 = array1.map(result => result / 2);
function finder(element) {
    return element > 215;
}
let finds = [200, 450, 500, 345].find(finder);
let nomi;
let nation;
[nomi, nation] = ['simo', 'italia'];
