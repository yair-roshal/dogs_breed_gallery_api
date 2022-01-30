  export function toObject(arr) {
    let arrOfObj = []
    for (let i = 0; i < arr.length; ++i)
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
 
  export function searchLikes(allDogs, leftList, allBreeds) {
    let newLeftListLikes = leftList
    for (let i = 0; i < allBreeds.length; i++) {
      searchLikesBreed(allDogs, leftList, allBreeds[i])
    }
     return newLeftListLikes
  }

    function searchLikesBreed(allDogs, leftList, searchBreed) {
    let newLeftList = leftList
    let allLikes = 0 

    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i].breed == searchBreed)
        allLikes = allLikes + allDogs[i].likes
    }
  
    for (let i = 0; i < newLeftList.length; i++) {
      if (newLeftList[i].breed == searchBreed) newLeftList[i].likes = allLikes
    }
 
    return newLeftList
  }




    function random(min, max) {
    return Math.round(min + Math.random() * (max - min))
  }

  export function randomArray(array) {
    let randomArr = []
    for (let i = 0; i < 80; i++) {
      randomArr.push(array[random(0, array.length)])
    }
    return randomArr
  }

  export function ArrayToObject(array) {
    let arrOfObj = []
    for (let i = 0; i < array.length; ++i)
      if (array[i] !== undefined) {
        let rv = {}
        rv.id = i
        rv.breed = array[i]
        rv.likes = 0
        arrOfObj.push(rv)
      }

    return arrOfObj
  }