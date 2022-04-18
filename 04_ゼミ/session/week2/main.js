const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// 追加ボタンが押されたときの処理
addButton.onclick = function () {
  //   console.dir(memoInput.value)
  // memo作成
  // inputが空の時は実行しない
  if (memoInput.value !== "") {
    const memo = createMemo(memoInput.value) // memoを作るメソッドの返り値を代入
    createMemoAfter(memo)
  }
}

/*
 * 概要：memo作成メソッド
 * 引数：value メモに追加したい内容
 * 処理：作成したメモを返す
 */
const createMemo = function (value) {
  const memo = document.createElement("div") // memoをDOM上で作る
  memo.className = "memo" // memoのクラス名を決めておく
  memo.textContent = value // inputタグの内容をメモに代入

  // 削除ボタン作成
  const deleteButton = document.createElement("button") // 削除ボタンをDOM上で作成
  deleteButton.textContent = "削除" // 削除ボタンの内容を代入
  // 削除ボタンが押されたときの処理
  deleteButton.onclick = function () {
    memo.remove() // memoをHTMLから削除
  }

  memo.append(deleteButton) // DOM=>DOMのmemoに追加
  return memo // memoを返す
}

/*
 * 概要：memo作成後の処理を行う関数
 * 引数：memo DOM上で作成したメモ
 * 処理：メモをDOMに追加し、inputの内容を空にする
 */
const createMemoAfter = function (memo) {
  memoContainer.append(memo) // DOM＝＞HTMLに追加
  memoInput.value = "" // inputタグの中身を空にする
}
