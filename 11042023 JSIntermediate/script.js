function countDown(num) {
  if (num <= 1) {
    return 1;
  }

  if (num % 2 == 1) {
    console.log(num);
    return countDown(num - 1);
  }
}

// STATEMENT
// 5 <= 1 === false, action: countDown(5 - 1), 5
// 4 <= 1 === false, action: countDown(4 - 1), 4
// 3 <= 1 === false, action: countDown(3 - 1), 3
// 2 <= 1 === false, action: countDown(2 - 1), 2
// 1 <= 1 === true, return 1;

console.log(countDown(5));

// function countDown(num) {
//   for (let i = num; i >= 1; i--) {
//     console.log(i);
//   }
// }
// console.log(countDown(5));
