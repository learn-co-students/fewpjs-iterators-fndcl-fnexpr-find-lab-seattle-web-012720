const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  return (arr.find( function(yearObj) {
    return yearObj.result === "W";
  }) || {}).year;
}
