const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let x = array.find(function(year) {
    return year.result === "W"
  })
  // console.log(x.year)
  if (x) { return x.year} else {return undefined}

}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

// superbowlWin(record)