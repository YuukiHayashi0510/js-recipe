const inputElement = document.getElementsByClassName("input-todo")
const container = document.getElementsByClassName("cards-container")
const addButton = document.getElementsByClassName("input-button")

for (let i = 0; i < inputElement.length; i++) {
  addButton[i].onclick = function (e) {
    // 入力欄のテキストを代入
    const text = e.path[1].children[0].value

    // カード作成
    const card = createCard(text)
    container[i].append(card)

    e.path[1].children[0].value = ""
  }
  // 発展 ★ - エンターキー
  window.onkeydown = function (e) {
    // keydown で押されたキーがエンターかつinputが空でなければ
    if (e.key === "Enter" && inputElement[i].value !== "") {
      const text = e.path[1].children[0].value

      // カード作成
      const card = createCard(text)
      container[i].append(card)

      e.path[1].children[0].value = ""
    }
  }
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
