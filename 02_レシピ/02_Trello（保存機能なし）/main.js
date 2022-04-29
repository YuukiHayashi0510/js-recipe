const inputElement = document.getElementsByClassName("input-todo")
const container = document.getElementsByClassName("cards-container")
const addButton = document.getElementsByClassName("input-button")

// list-container追加用の要素
const mainContainer = document.getElementById("main-container")
const listInputElement = document.getElementById("input-list")
const listAddButton = document.getElementById("list-add-button")

listAddButton.onclick = function () {
  if (listInputElement.value !== "") {
    const list = createList(listInputElement.value)

    // main-container
    mainContainer.append(list)
    listInputElement.value = ""
  }
}

// リストを作る関数
const createList = function (text) {
  // list-container
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"

  // list-header
  const listHeader = document.createElement("div")
  listHeader.className = "list-header"
  console.dir(listInputElement)
  listHeader.textContent = text

  // cards-container
  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"

  // list-footer
  const listFooter = document.createElement("div")
  listFooter.className = "list-footer"

  // input-container
  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"

  // input-todo
  const inputTodo = document.createElement("input")
  inputTodo.className = "input-todo"

  // input-button
  const inputButton = document.createElement("div")
  inputButton.className = "input-button"
  inputButton.textContent = "追加"

  // input-container append
  inputContainer.append(inputTodo)
  inputContainer.append(inputButton)
  listFooter.append(inputContainer)

  // list-container
  listContainer.append(listHeader)
  listContainer.append(cardsContainer)
  listContainer.append(listFooter)

  return listContainer
}

// addbutton
for (let i = 0; i < inputElement.length; i++) {
  addButton[i].onclick = function (e) {
    // 入力欄のテキストを代入
    const text = e.path[1].children[0].value

    // カード作成
    const card = createCard(text)
    container[i].append(card)

    e.path[1].children[0].value = ""
  }
}

// 発展 ★ - エンターキー
window.onkeydown = function (e) {
  for (let i = 0; i < inputElement.length; i++) {
    // keydown で押されたキーがエンターかつinputが空でなければ
    if (e.key === "Enter" && inputElement[i].value !== "") {
      const text = inputElement[i].value

      // カード作成
      const card = createCard(text)
      container[i].append(card)

      inputElement[i].value = ""
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
