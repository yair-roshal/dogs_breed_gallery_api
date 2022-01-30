import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"
import { isArray } from "underscore"


import { useEffect, useState, useContext } from "react" 
  import { DogsContext } from "../contexts/Context"


export const RightList = ( ) => {
// export const RightList = ({ loading, dogsObj }) => {

 
    const [dogs, setDogs] = useContext(DogsContext)

  return (
    <div>
      {/* {loading && <div>Loading</div>}
      {!loading && isArray(dogsObj) */}
 
     {dogs 
      && (
        <div>
          <Grid container spacing={2}> 
{          console.log('dogs_RightList', dogs)
}            {dogs.map((dog, index) => (
              <RightListItem key={index} dog={dog} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  )
}
