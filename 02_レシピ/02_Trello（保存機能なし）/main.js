const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  // 入力欄のテキストを代入
  const text = inputElement.value

  // カード作成
  const card = createCard(text)
  container.append(card)

  inputElement.value = ""
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  // todo作成
  const todo = document.createElement("div")
  todo.className = "to-do"
  todo.textContent = text
  card.append(todo)

  // 削除ボタン
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }

  card.append(deleteButton)
  return card
}

// 発展 ★ - エンターキー
window.onkeydown = function (e) {
  // keydown で押されたキーがエンターかつinputが空でなければ
  if (e.key === "Enter" && inputElement.value !== "") {
    addButton.onclick()
  }
}
