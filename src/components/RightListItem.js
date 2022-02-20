import { useState, useContext } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader" 
import Grid from "@mui/material/Grid"
import { styled } from "@mui/system"
import CardActions from "@mui/material/CardActions"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from "@mui/material/IconButton" 
import { DogsContext } from "../contexts/Context"

console.log("RightListItem :>> ") 


const MyBox = styled("Box")({
  padding: 8,
  borderRadius: 4,
  cursor: "pointer",
  "-webkit-touch-callout": "none" /* iOS Safari */,
  "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
  "-khtml-user-select": "none" /* Konqueror */,
  "-moz-user-select": "none" /* Firefox */,
  "-ms-user-select": "none" /* Internet Explorer/Edge */,
  "user-select": "none",
})

export const RightListItem = ({ dog }) => {
  const { id, breed, likes } = dog
  const [count, setCount] = useState(likes)
  const [dogs, setDogs] = useContext(DogsContext)

  function addLikes(object, searchID) {
    let replacedObject = object.slice(0)
    for (let i = 0; i < replacedObject.length; i++) {
      if (replacedObject[i].id === searchID) {
        replacedObject[i].likes++
        return replacedObject
      }
    }
    return replacedObject
  }

  const handleIncrement = () => {
    setCount((count) => count + 1)
    setDogs(addLikes(dogs, id))
  }

  return (
    <Grid item xs={3}>
      <MyBox>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader subheader={breed} /> 
          <CardActions disableSpacing>
            <IconButton
              onClick={handleIncrement}
              aria-label="add to favorites"
              sx={{ color: count > 0 ? "red" : "" }}
            >
              <FavoriteIcon /> <span>{count} </span> 
            </IconButton>
          </CardActions>

          <FetchImg dog={breed} />
        </Card>
      </MyBox>
    </Grid>
  )
}
