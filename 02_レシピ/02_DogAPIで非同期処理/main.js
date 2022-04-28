const dogImageElement = document.getElementById("dog-image")
const catImageElement = document.getElementById("cat-image")

// 発展🌟１ワンちゃん切り替えボタン
const turnButton = document.getElementById("turn-button")

// 発展🌟２ 犬種指定切り替えボタン
const fetchButton = document.getElementById("fetch-button")
const breed = document.getElementById("breed")
let url
const firstUrl = "https://dog.ceo/api/breed/"
const endUrl = "/images/random"
const dogInput = document.getElementById("dog-input")
const dogImageContainer = document.getElementById("dog-image-container")

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

// 発展🌟１ワンちゃん切り替えボタン
turnButton.onclick = function () {
  // 指定したサーバーにデータを取りに行く
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      dogImageElement.src = data.message // 画像を表示する
    })
}

// 発展🌟２ 犬種指定切り替えボタン
fetchButton.onclick = function () {
  if (dogInput.value) {
    dogImageContainer.textContent = ""
    url = firstUrl + breed.value + endUrl + "/" + dogInput.value
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        for (let i = 0; i < Number(dogInput.value); i++) {
          if (i === 0) {
            dogImageElement.src = data.message[i]
          } else {
            const image = document.createElement("img")
            image.src = data.message[i]
            dogImageContainer.append(image)
          }
        }
      })
  } else {
    url = firstUrl + breed.value + endUrl
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dogImageElement.src = data.message
      })
  }
}
