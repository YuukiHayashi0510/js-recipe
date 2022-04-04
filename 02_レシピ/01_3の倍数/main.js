const genkiFunction = function (number) {
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0) {
      console.log(index + "!!!!!!!")
    } else console.log(index)
  }
}
genkiFunction(100)
