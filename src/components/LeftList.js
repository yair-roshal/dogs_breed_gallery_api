import { useEffect, useState, useContext } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { MyContext } from "../contexts/Context"

export const LeftList = ({ loading, dogsObj }) => {
  const [newLeftListArr, setNewLeftList] = useState(dogsObj)

  const { context, setContext } = useContext(MyContext)
  // console.log('MyContext_LeftListItem', context);

  useEffect(() => {
    // console.log('newLeftList', newLeftList);
    setNewLeftList(newLeftList)
  }, [context])

  let newArr = []
  for (var i = 0; i < dogsObj.length; ++i) {
    const values = Object.values(dogsObj[i])
    newArr.push(values[1])
  }
  // console.log("newArr", newArr)

  let countOfBreed = newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})
  console.log("countOfBreed", countOfBreed)

  const allBreeds = Object.keys(countOfBreed)
  console.log("allBreeds", allBreeds)

  const ArrayCountOfBreed = Object.entries(countOfBreed)
  console.log("ArrayCountOfBreed", ArrayCountOfBreed)

  function toObject(arr) {
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

  const ObjectCountOfBreed = toObject(ArrayCountOfBreed)
  console.log("ObjectCountOfBreed", ObjectCountOfBreed)

  const newLeftList = replaceLeftList(dogsObj, ObjectCountOfBreed, allBreeds)
  console.log("newLeftList", newLeftList)

  function replaceLeftList(allDogs, leftList, allBreeds) {
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

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <List>
            {newLeftListArr.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
