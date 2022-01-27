import { useEffect, useState, useContext, useRef } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Context } from "../contexts/Context"

export const RightListItem = ({ dog }) => {
  const [context, setContext] = useContext(Context)

  const { id, breed, likes } = dog

  const [count, setCount] = useState(0)

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
