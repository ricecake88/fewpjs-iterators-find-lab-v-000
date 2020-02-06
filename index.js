const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array_of_records) {
  array_of_records.find(game => game.result === "W" ? game.year : undefined)
  
}