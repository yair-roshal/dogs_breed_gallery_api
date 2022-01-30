import { useEffect, useState, useContext } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { DogsContext } from "../contexts/Context"
import { toObject, searchLikes } from "../utils/func"

export const LeftList = () => {
  const [dogs, setDogs] = useContext(DogsContext)

  let newArr = []
  for (var i = 0; i < dogs.length; ++i) {
    const values = Object.values(dogs[i])
    newArr.push(values[1])
  }
  // console.log("newArr", newArr)

  let countOfBreed = newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})
  // console.log("countOfBreed", countOfBreed)

  const allBreeds = Object.keys(countOfBreed)
  // console.log("allBreeds", allBreeds)

  const ArrayCountOfBreed = Object.entries(countOfBreed)
  // console.log("ArrayCountOfBreed", ArrayCountOfBreed)

  const ObjectCountOfBreed = toObject(ArrayCountOfBreed)
  // console.log("ObjectCountOfBreed", ObjectCountOfBreed)

  const [newLeftList, setNewLeftList] = useState(
    searchLikes(dogs, ObjectCountOfBreed, allBreeds)
  )

  useEffect(() => {
    setNewLeftList(dogs)
  }, [dogs, newLeftList])

  return (
    <div>
      {/* {loading && <div>Loading</div>}
      {!loading  */}
      {newLeftList && (
        <div>
          <List>
            {newLeftList.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
