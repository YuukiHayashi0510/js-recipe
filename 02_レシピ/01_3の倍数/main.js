// 発展３ ３の倍数で元気になる関数
// 解釈＝＞genkiFunction()無限に3の倍数をチェックする。
let count = 0

const genkiFunction = function () {
  count += 1
  if (count % 3 === 0) {
    console.log(count + "!!!!!!!")
  } else console.log(count)
}

setInterval(genkiFunction, 1000)

// 発展２文字列に３が入るときも元気になる
// function genkiFunction(number) {
//   var strNum
//   for (var i = 1; i <= number; i++) {
//     strNum = String(i)
//     if (i % 3 === 0) {
//       console.log(i + "!!!!!!")
//     } else if (strNum.indexOf("3") != -1) {
//       console.log(i + "!!!!!!")
//     } else {
//       console.log(i)
//     }
//   }
// }
// genkiFunction(100)

// 発展１FizzBuzz関数
// const fizzBuzz = function (number) {
//   for (let index = 1; index <= number; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//       console.log("FizzBuzz")
//     } else if (index % 3 === 0) {
//       console.log("Fizz")
//     } else if (index % 5 === 0) {
//       console.log("Buzz")
//     } else console.log(index)
//   }
// }
// fizzBuzz(15)

// ３の倍数で元気になる関数
// const genkiFunction = function (number) {
//   for (let index = 1; index <= number; index++) {
//     if (index % 3 === 0) {
//       console.log(index + "!!!!!!!")
//     } else console.log(index)
//   }
// }
// genkiFunction(100)
