const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
   const win = array.find( function(w) {
    return w.result === 'W'
  });
  if (win) {
    return win.year
  }
}
