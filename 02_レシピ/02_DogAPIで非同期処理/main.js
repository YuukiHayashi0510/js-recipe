const imageElement = document.getElementById("dog-image")

// console.log("fetch before")
// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    // console.log("one")
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    // console.log("two")
    imageElement.src = data.message // 画像を表示する
  })
// console.log("fetch after")
