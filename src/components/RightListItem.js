import { useState, useContext } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import { DogsContext } from "../contexts/Context"

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
    <Grid onClick={handleIncrement} item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader subheader={breed} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            likes={count}
          </Typography>
        </CardContent>
        <FetchImg dog={breed} />
      </Card>
    </Grid>
  )
}
