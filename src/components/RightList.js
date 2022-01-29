import { useEffect, useState, useRef,useContext } from "react"
import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"
import { useLocalStorage } from '../hooks'
import { MyContext } from "../contexts/Context"


export const RightList = ({ loading, dogsObj }) => {
   const elementRef = useRef(0)

  const dogs_context = useContext(MyContext);
  console.log("dogs_context_RightList", dogs_context)

  // const [dogLS, setDogLS] = useLocalStorage("allDogs", dogsObj)
  
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
