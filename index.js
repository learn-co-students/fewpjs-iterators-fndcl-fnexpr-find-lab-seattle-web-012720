const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(record => record.result === "W")
  if (result) {
    return result.year;
  } else {
    return undefined
  }
} 

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }