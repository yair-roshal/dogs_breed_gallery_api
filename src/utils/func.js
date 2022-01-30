
  export function toObject(arr) {
    let arrOfObj = []
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) {
        let rv = {}
        rv.id = i
        rv.breed = arr[i][0]
        rv.count = arr[i][1]
        rv.likes = 0
        arrOfObj.push(rv)
      }

    return arrOfObj
  }
 
  export function replaceLeftList(allDogs, leftList, allBreeds) {
    let newLeftList = leftList
    for (var i = 0; i < allBreeds.length; i++) {
      replaceLeftListBreed(allDogs, leftList, allBreeds[i])
    }
    return newLeftList
  }

    function replaceLeftListBreed(allDogs, leftList, searchBreed) {
    let newLeftList = leftList
    var allLikes = 0
    for (var i = 0; i < allDogs.length; i++) {
      if (allDogs[i].breed == searchBreed)
        allLikes = allLikes + allDogs[i].likes
    }
    for (var i = 0; i < newLeftList.length; i++) {
      if (newLeftList[i].breed == searchBreed) newLeftList[i].likes = allLikes
    }
    return newLeftList
  }