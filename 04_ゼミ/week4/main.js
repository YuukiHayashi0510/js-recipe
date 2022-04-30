const files = [
  {
    title: "index.html",
    content: "index.htmlの内容です",
    selected: true,
  },
  {
    title: "package.json",
    content: "package.jsonの内容です",
    selected: false,
  },
  {
    title: "sandbox.config.json",
    content: "sandbox.config.jsonの内容です",
    selected: false,
  },
  {
    title: "style.css",
    content: "style.cssの内容です",
    selected: false,
  },
]

const fileNavigationList = document.getElementById("file-navigation-list")
const editingFileTitle = document.getElementById("editing-file-title")
const editingFileContent = document.getElementById("editing-file-content")
const addNewFileButton = document.getElementById("add-new-file-button")
// const addNewFileInput = document.getElementById("add-new-file-input")
const fileNavigationFiles = document.getElementsByClassName(
  "file-navigation__file",
)

addNewFileButton.onclick = function () {
  // 新しいファイルを作成する処理
}

const loadFiles = function () {
  // filesを読み込む処理
  // リセット
  fileNavigationList.textContent = ""

  // fileの数だけli要素を追加
  for (let i = 0; i < files.length; i++) {
    // li要素作る
    const fileName = document.createElement("li")
    fileName.className = "file-navigation__file"
    fileName.textContent = files[i].title

    // data-selected=trueにする
    //element.setAttribute(name,value);
    // classで毎回取ってくることになるかもしれないコード
    // if (i === 0) {
    //   fileName.setAttribute("data-selected", true);
    // }
    fileName.setAttribute("data-selected", files[i].selected)

    fileName.onclick = function () {
      for (let index = 0; index < files.length; index++) {
        files[index].selected = false
        // file-navigation__fileのクラスでとってきた配列全部一旦false
        fileNavigationFiles[index].setAttribute(
          "data-selected",
          files[index].selected,
        )
      }
      files[i].selected = true
      fileName.setAttribute("data-selected", files[i].selected)
      // 編集中のファイル名を表示
      editingFileTitle.textContent = files[i].title
      editingFileContent.value = files[i].content
    }

    // li要素をfileNavigationListに追加
    fileNavigationList.append(fileName)
  }

  // 編集中のファイル名を表示
  editingFileTitle.textContent = files[0].title
  editingFileContent.value = files[0].content
}
loadFiles()
