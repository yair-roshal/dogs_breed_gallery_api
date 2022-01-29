import { RightListItem } from "./RightListItem"
import Grid from "@mui/material/Grid"
import { isArray } from "underscore"

export const RightList = ({ loading, dogsObj }) => {
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && isArray(dogsObj) && (
        <div>
          <Grid container spacing={2}> 
            {dogsObj.map((dog, index) => (
              <RightListItem key={index} dog={dog} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  )
}
