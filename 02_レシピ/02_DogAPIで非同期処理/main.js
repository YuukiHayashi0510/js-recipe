const dogImageElement = document.getElementById("dog-image")
const catImageElement = document.getElementById("cat-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    dogImageElement.src = data.message // 画像を表示する
  })

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    catImageElement.src = data[0].url
  })
