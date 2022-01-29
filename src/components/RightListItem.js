import { useEffect, useState, useContext, useRef } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { MyContext } from "../contexts/Context"
import { useLocalStorage } from '../hooks'

export const RightListItem = ({ dog }) => {
  // const [context, setContext] = useContext(MyContext)
 
  const { id, breed, likes } = dog
  const [count, setCount] = useState(0)
 
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1) 
  }
 
// console.log('dog1111', dog);

//   const dogs = [
//   { id: 0, breed: "newfoundland", likes: 0 },
//   { id: 1, breed: "hound", likes: 0 },
//   { id: 2, breed: "labrador", likes: 0 },
// ]

  // useEffect(() => {  
  //        setContext(toObject(randomArray(Object.keys(res))))
      
  // }, [])
 
  return (
    <Grid
       onClick={handleIncrement}
      //  onClick={() => setContext(dogs)}
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
