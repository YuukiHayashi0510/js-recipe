// 発展３Calculator.app

var result = document.getElementById("result")
const acButton = document.getElementById("AC")
const surplusButton = document.getElementById("surplus")
const divButton = document.getElementById("div")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const multiplyButton = document.getElementById("multiply")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const minusButton = document.getElementById("minus")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const addButton = document.getElementById("add")
const zeroButton = document.getElementById("zero")
const pointButton = document.getElementById("point")
const cButton = document.getElementById("C")
const equalButton = document.getElementById("equal")

// inputのValueは文字列なので、文字列を足していってい計算式にする
function edit(elem) {
  result.value += elem.value
}

surplusButton.onclick = function () {
  result.value += surplusButton.value
}
divButton.onclick = function () {
  result.value += divButton.value
}
sevenButton.onclick = function () {
  result.value += sevenButton.value
}
eightButton.onclick = function () {
  result.value += eightButton.value
}
nineButton.onclick = function () {
  result.value += nineButton.value
}
multiplyButton.onclick = function () {
  result.value += multiplyButton.value
}
fourButton.onclick = function () {
  result.value += fourButton.value
}
fiveButton.onclick = function () {
  result.value += fiveButton.value
}
sixButton.onclick = function () {
  result.value += sixButton.value
}
minusButton.onclick = function (mi) {
  result.value += minusButton.value
}
oneButton.onclick = function () {
  result.value += oneButton.value
}
twoButton.onclick = function () {
  result.value += twoButton.value
}
threeButton.onclick = function (th) {
  result.value += threeButton.value
}
addButton.onclick = function () {
  result.value += addButton.value
}
zeroButton.onclick = function (z) {
  result.value += zeroButton.value
}
pointButton.onclick = function (po) {
  result.value += pointButton.value
}

// new Function構文で関数を作る
// result.value＝＞計算式になっているので、returnで返せば計算結果になる
equalButton.onclick = function () {
  result.value = new Function("return " + result.value)()
}

// ACボタン、全削除
acButton.onclick = function () {
  result.value = ""
}

// cボタン、最後尾の文字列を削除
cButton.onclick = function () {
  result.value = result.value.slice(0, -1)
}

// 発展２
// const display = document.getElementById("display")
// const plusButton = document.getElementById("plus-button")
// const minusButton = document.getElementById("minus-button")
// const multiplyButton = document.getElementById("multiply-button")

// let count = 0
// plusButton.onclick = function () {
//   count += 1
//   display.textContent = count
// }

// minusButton.onclick = function () {
//   count -= 1
//   display.textContent = count
// }

// multiplyButton.onclick = function () {
//   count *= 2
//   display.textContent = count
// }
