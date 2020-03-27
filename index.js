// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(search => search.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(driver => {
    return driver[0] === letter.split("")[0]
  })
}

function matchName(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string
  })
}