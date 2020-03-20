const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr){
  const result = arr.find(function(obj) { 
    return obj.result === "W";
  })
  return result ? result.year : undefined;
}

