// 要素を取得
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

// choiceを配列とする（繰り返しで楽をするため、選択肢ボタンのtextContent代入など)
const choices = [choice1, choice2, choice3]
let quizIndex = 0
let anserNumber = 0

// quizArray quizオブジェクトをまとめたもの
const quizArray = [
  {
    text: "このロゴマークは何のマークでしょうか？",
    image: "Google_Apps_Script.svg.png",
    choices: [
      {
        // choice1
        text: "Google App Script",
        isAnswer: true,
        feedback: "正解！!略称GASだね!",
      },
      {
        // choice2
        text: "JavaScript",
        isAnswer: false,
        feedback: "JSではないよ!",
      },
      {
        // choice3
        text: "Google JavaScript",
        isAnswer: false,
        feedback: "惜しい！微妙に正解に見えるよね、、、笑",
      },
    ],
  },
  {
    text: "このロゴマークは何のマークでしょうか？",
    image: "Google_Apps_Script.svg.png",
    choices: [
      {
        // choice1
        text: "Google App Script",
        isAnswer: true,
        feedback: "正解！!略称GASだね!",
      },
      {
        // choice2
        text: "JavaScript",
        isAnswer: false,
        feedback: "JSではないよ!",
      },
      {
        // choice3
        text: "Google JavaScript",
        isAnswer: false,
        feedback: "惜しい！微妙に正解に見えるよね、、、笑",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent =
    "Q. " + (quizIndex + 1) + " " + quizArray[quizIndex].text
  // 画像を表示
  quizImage.src = "./images/" + quizArray[quizIndex].image
  // 選択肢（ボタン）の中身を表示
  for (let i = 0; i < quizArray[quizIndex].choices.length; i++) {
    choices[i].disabled = false

    choices[i].textContent = quizArray[quizIndex].choices[i].text
  }
  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden")
}

const choose = function (choiceNumber) {
  feedback.textContent = quizArray[quizIndex].choices[choiceNumber].feedback
  // 正解
  if (quizArray[quizIndex].choices[choiceNumber].isAnswer) {
    if (quizIndex < quizArray.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden")
      anserNumber++
    } else {
      // 次の問題がなければ、結果を表示
      feedback.textContent = "正解数：" + anserNumber
    }
  }
}

// 選択肢のクリックを関数化
const choiceClick = function () {
  for (let i = 0; i < choices.length; i++) {
    choices[i].onclick = function () {
      choose(i)
      choices[i].disabled = true
    }
  }
}

// next-quizボタンクリック時の処理
nextQuizButton.onclick = function () {
  // quizindex=0=>1
  // quizindex=>2
  // quizArray[0,1] [2] Index Out of Range
  // クイズがなかった場合の処理
  if (quizIndex < quizArray.length - 1) {
    quizIndex++
    // quizIndex = quizIndex + 1;
    reloadQuiz()
  } else {
    nextQuizButton.textContent = "もうクイズはないよ！"
  }
}

reloadQuiz()
choiceClick()
