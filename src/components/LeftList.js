import   { useEffect, useState,useContext } from "react"
import List from "@mui/material/List"

import { LeftListItem } from "./LeftListItem"
import { Context } from "../contexts/Context";
 
export const LeftList = ({ loading, dogsObj }) => {
  // const [dogsArr, setDogsArr] = useState([])
  const [context, setContext] = useContext(Context);
 
  let newArr = []
  for (var i = 0; i < dogsObj.length; ++i) {
    const values = Object.values(dogsObj[i])
    newArr.push(values[1])
    // console.log("values", values)
  }
  console.log("newArr", newArr)
 
  let countElem= newArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {}) 

    console.log("countElem", countElem)
   
    const entries = Object.entries(countElem)
    console.log("countElem", countElem)


  const URL = "https://dog.ceo/api/breeds/list/all"

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
           {/* <div>context now--- {context}</div>; */}
           {/* {console.log('context222', context)} */}
          <List>
            {countElem.map((dog, index) => (
              <LeftListItem key={index} dog={dog} />
            ))}
          </List>
        </div>
      )}
    </div>
  )
}
