// 発展３Calculator.app

var result = document.getElementById("result")

// inputのValueは文字列なので、文字列を足していってい計算式にする
function edit(elem) {
  result.value = result.value + elem.value
}

// new Function構文で関数を作る
// result.value＝＞計算式になっているので、returnで返せば計算結果になる
function calc() {
  result.value = new Function("return " + result.value)()
}

// ACボタン、全削除
function ac() {
  result.value = ""
}

// cボタン、最後尾の文字列を削除
function c() {
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
