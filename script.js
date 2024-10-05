// function add(n) {
//   return function (m) {
//     return n + m;
//   };
// }
// console.log(add(1)(3));

function multiplyAll(arr) {
  return function (n) {
    return arr.map((x) => x * n);
  };
}
console.log(multiplyAll([1, 2, 3](2)));
