// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const displayItems = document.getElementById("display-items")
const addButton100 = document.getElementById("add-button-100")
const displaySaifu = document.getElementById("display-saifu")
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const oturiButton = document.getElementById("oturi-button")
const buyButtonBeer = document.getElementById("buy-button-beer")

// count（カウント用変数）を使う
let count = 0
//ビール用のカウント
let countBeer = 0
let saifu = 1000
let jihankiMoney = 0

// buyButtonTea を押した時の処理
buyButtonTea.onclick = function () {
  //自販機の金額が100円以上の時に実行
  if (jihankiMoney >= 100) {
    // count++
    count++
    // repeatでお茶を増やす
    displayItems.textContent = "🍵".repeat(count) + "🍺".repeat(countBeer)
    // 自販機の金額から100円引く
    jihankiMoney -= 100
    // jihankiMoney の状態を反映
    displayJihankiMoney.textContent = jihankiMoney
  }
}

//100円を入れるボタンの処理
addButton100.onclick = function () {
  if (saifu >= 100) {
    //財布から100円を引く
    saifu -= 100
    //自販機に100円を足す
    jihankiMoney += 100
    //saifuを表示
    displaySaifu.textContent = saifu
    //jihankiMoneyを表示
    displayJihankiMoney.textContent = jihankiMoney
  }
}
// お釣りボタンを押したら、投入金額が所持金に戻る
oturiButton.onclick = function () {
  // 財布に投入金額を入れる
  saifu += jihankiMoney
  // 自販機の金額を全部戻す
  jihankiMoney = 0
  // htmlに反映
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney
}

// ビールの値段は150円で買うと🍺が出てきます。
buyButtonBeer.onclick = function () {
  //自販機の金額が100円以上の時に実行
  if (jihankiMoney >= 150) {
    // countBeer++
    countBeer++
    // repeatでお茶を増やす
    displayItems.textContent = "🍵".repeat(count) + "🍺".repeat(countBeer)
    // 自販機の金額から100円引く
    jihankiMoney -= 150
    // jihankiMoney の状態を反映
    displayJihankiMoney.textContent = jihankiMoney
  }
}

// 自販機の金額が０の時はお茶、ビール共にdisabled
buyButtonBeer.disabled = true
buyButtonTea.disabled = true
// window自体がクリックされた時の処理
window.onclick = function () {
  // 自販機の金額が１００円未満の時
  if (displayJihankiMoney.textContent < 100) {
    buyButtonBeer.disabled = true
    buyButtonTea.disabled = true
    // 自販機の金額が１5０円未満の時
  } else if (displayJihankiMoney.textContent < 150) {
    buyButtonBeer.disabled = true
    buyButtonTea.disabled = false
    // 150円以上の時
  } else {
    buyButtonTea.disabled = false
    buyButtonBeer.disabled = false
  }
}
