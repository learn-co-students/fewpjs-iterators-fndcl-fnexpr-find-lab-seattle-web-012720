const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  const team = array.find(item => item.result === "W")  
  return !!team ? team.year : undefined
}
