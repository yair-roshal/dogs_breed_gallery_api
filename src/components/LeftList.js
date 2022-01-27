import   { useEffect, useState,useContext } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { Context } from "../contexts/Context";
 
export const LeftList = ({ loading, dogsObj }) => {
  // const [dogsArr, setDogsArr] = useState([])
  const [context, setContext] = useContext(Context);

  // const filter = [...new Set([...dogsObj ])]
  // console.log('filter', filter);

  let newArr = []
  for (var i = 0; i < dogsObj.length; ++i) {
    const values = Object.values(dogsObj[i])
    newArr.push(values[1])
    // console.log("values", values)
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
           {/* <div>context now--- {context}</div>; */}
           {console.log('context222', context)}
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
