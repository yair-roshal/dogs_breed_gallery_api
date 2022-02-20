import { useEffect, useState, useContext, useMemo } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { DogsContext } from "../contexts/Context"
import { toObject, searchLikes } from "../utils/func"

export const LeftList = () => {
  const [dogs, setDogs] = useContext(DogsContext)

  let newArr = []
  for (let i = 0; i < dogs.length; ++i) {
    const values = Object.values(dogs[i])
    newArr.push(values[1])
  }

  let countOfBreed = newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})

  const allBreeds = Object.keys(countOfBreed)
  const ArrayCountOfBreed = Object.entries(countOfBreed)
  const ObjectCountOfBreed = toObject(ArrayCountOfBreed)

  // const countOfBreed = useMemo(newArr.reduce((acc, el) =>{
  //     acc[el] = (acc[el] || 0) + 1
  //     return acc
  //   }))

  // const allBreeds = useMemo(() => Object.keys(countOfBreed));
  // const ArrayCountOfBreed = useMemo(() => Object.entries(countOfBreed) );
  // const ObjectCountOfBreed = useMemo(() => toObject(ArrayCountOfBreed));

  const [newLeftList, setNewLeftList] = useState(
    searchLikes(dogs, ObjectCountOfBreed, allBreeds)
  )

  useEffect(() => {
    setNewLeftList(searchLikes(dogs, ObjectCountOfBreed, allBreeds))
  }, [dogs])

  return (
    <div>
      {newLeftList && (
        <div>
          <List>
            {console.log("LeftList :>> ")}
            {newLeftList.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
