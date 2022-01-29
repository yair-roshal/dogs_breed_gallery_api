import { useEffect,  useState, useContext, useRef } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { MyContext } from "../contexts/Context"

export const RightListItem = ({ dog }) => {
  const { context, setContext } = useContext(MyContext) 
  const { id, breed, likes } = dog
  const [count, setCount] = useState(likes)

  useEffect(() => {


  }, [context])


  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    setContext(replace(context, id))
  }

  function replace(object, searchID) {
    var replacedObject = object
    for (var i = 0; i < replacedObject.length; i++) {
      if (replacedObject[i].id != searchID) continue
      replacedObject[i].likes++
      return replacedObject
    }
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
