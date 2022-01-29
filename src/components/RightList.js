import { useEffect, useState, useRef,useContext } from "react"
import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"
import { useLocalStorage } from '../hooks'
import { MyContext } from "../contexts/Context"
import {isArray} from "underscore"


export const RightList = ({ loading, dogsObj }) => {
   const elementRef = useRef(0)

  //  const {context, setContext} = useContext(MyContext);

  
  return (
    <div>
    
      {loading && <div>Loading</div>}
      {!loading && isArray(dogsObj) &&(
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
