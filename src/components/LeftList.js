import React, { useEffect, useState } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"

export const LeftList = ({ loading, dogsObj }) => {
  // const [dogsArr, setDogsArr] = useState([])

  // const filter = [...new Set([...dogsObj ])]
  // console.log('filter', filter);

  let newArr = []
  for (var i = 0; i < dogsObj.length; ++i) {
    const values = Object.values(dogsObj[i])
    newArr.push(values[1])
    console.log("values", values)
  }
  console.log("newArr", newArr)
  const filter = [...new Set([...newArr])]
  console.log("filter", filter)

  // const values = Object.values(dogsObj); // [ 'JS: React', 'js-react' ]
  // console.log('values', values);

  // for (const value of values) {
  //   console.log(value);

  // tempHouses = tempHouses.filter(house => house.countR >= countR);

  const URL = "https://dog.ceo/api/breeds/list/all"

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <List>
            {dogsObj.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
