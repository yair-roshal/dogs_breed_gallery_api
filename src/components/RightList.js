import { useEffect, useState, useRef } from "react"
import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"
import { useLocalStorage } from '../hooks'

export const RightList = ({ loading, dogsObj }) => {
  const [count, setCount] = useState(0)

  const elementRef = useRef(0)

  // const [dogLS, setDogLS] = useLocalStorage("allDogs", dogsObj)
 
  // useEffect(() => {
  //   setDogLS(dogsObj)
  //  }, [dogsObj])



  //  function updateData(dogs) {
  //   setDogs(dogs)
  // }

  // function HandleCountLikes() {
  //   elementRef.current++
  // }

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Grid
            ref={elementRef}
             container
            spacing={2}
          >
            {dogsObj.map((dog, index) => (
              <RightListItem key={index} dog={dog} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  )
}
