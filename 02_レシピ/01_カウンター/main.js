// 発展３Calculator.app

let result = document.getElementById("result")
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
// ope1 ==> 最初の数字
let ope1 = ""
// ope2 ==> もう1個の数字
let ope2 = ""
// 演算記号
let opesymbol = ""

sevenButton.onclick = function () {
  result.value += sevenButton.value
}
eightButton.onclick = function () {
  result.value += eightButton.value
}
nineButton.onclick = function () {
  result.value += nineButton.value
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
oneButton.onclick = function () {
  result.value += oneButton.value
}
twoButton.onclick = function () {
  result.value += twoButton.value
}
threeButton.onclick = function () {
  result.value += threeButton.value
}
zeroButton.onclick = function () {
  result.value += zeroButton.value
}
// 小数点
pointButton.onclick = function () {
  result.value += pointButton.value
}

// 演算記号
minusButton.onclick = function () {
  ope1 = Number(result.value)
  result.value += minusButton.value
}
multiplyButton.onclick = function () {
  ope1 = Number(result.value)
  result.value += multiplyButton.value
}
surplusButton.onclick = function () {
  ope1 = Number(result.value)
  result.value += surplusButton.value
}
divButton.onclick = function () {
  ope1 = Number(result.value)
  result.value += divButton.value
}
addButton.onclick = function () {
  ope1 = Number(result.value)
  result.value += addButton.value
}

// 計算結果
equalButton.onclick = function () {
  for (let index = 0; index < result.value.length; index++) {
    if (
      result.value[index] === addButton.value ||
      result.value[index] === minusButton.value ||
      result.value[index] === multiplyButton.value ||
      result.value[index] === divButton.value ||
      result.value[index] === surplusButton.value
    ) {
      ope2 = Number(result.value.slice(index + 1, result.value.length))
      opesymbol = result.value[index]
      if (opesymbol === addButton.value) {
        result.value = ope1 + ope2
      } else if (opesymbol === minusButton.value) {
        result.value = ope1 - ope2
      } else if (opesymbol === multiplyButton.value) {
        result.value = ope1 * ope2
      } else if (opesymbol === divButton.value) {
        result.value = ope1 / ope2
      } else if (opesymbol === surplusButton.value) {
        result.value = ope1 % ope2
      }
      return
    }
  }
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
