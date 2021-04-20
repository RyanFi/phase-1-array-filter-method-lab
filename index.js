function findMatching(namesArray, stringName) {
  return namesArray.filter(
    match => match.toLowerCase() === stringName.toLowerCase()
  )
}

function fuzzyMatch(namesArray, stringLetter) {
    return namesArray.filter(
      match => match.toLowerCase().indexOf(stringLetter.toLowerCase()) === 0
    )
  }

  function matchName(namesArray, stringData) {
    return namesArray.filter(match => match.name === stringData)
  }