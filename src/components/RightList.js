import { useEffect, useState, useRef } from "react"
import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"

export const RightList = ({ loading, dogsObj }) => {
  const [count, setCount] = useState(0)

  const elementRef = useRef(0)

  // useEffect(() => {
  //   setDogs(dogs)
  //  }, [dogs])

  //  function updateData(dogs) {
  //   setDogs(dogs)
  // }

  function HandleCountLikes() {
    elementRef.current++
  }

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Grid
            ref={elementRef}
            onClick={HandleCountLikes}
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
