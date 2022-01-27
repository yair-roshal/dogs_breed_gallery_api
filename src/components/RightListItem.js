import { useEffect, useState, useContext, useRef } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Context } from "../contexts/Context"
import { useLocalStorage } from '../hooks'

export const RightListItem = ({ dog }) => {
  const [context, setContext] = useContext(Context)
  const { id, breed, likes } = dog
  const [count, setCount] = useState(0)


  // const [allDogs] = useLocalStorage('allDogs')
// console.log('allDogs5555', allDogs);

  // const [username, setUsername] = useLocalStorage("username", "John")
  // const [likesLS, setLikesLS] = useLocalStorage("likes", "5")
  // const [dogLS, setDogLS] = useLocalStorage("allDogs", dog)

  // const [id] = useLocalStorage('id' )
  // const [likes] = useLocalStorage('likes')

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)


  }

  return (
    <Grid
      //  ref={elementRef}
      onClick={handleIncrement}
      // onClick={HandleCountLikes(id)}
      // onClick={() => setContext("New123")}
      item
      xs={3}
    >
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
