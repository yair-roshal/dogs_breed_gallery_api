import { useEffect, useState, useContext } from "react"
import { FetchImg } from "../hooks"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import { DogsContext } from "../contexts/Context"

export const RightListItem = ({ dog }) => {
  // const { context, setContext } = useContext(MyContext)
  const { id, breed, likes } = dog
  // const [count, setCount] = useState( likes)
  const [count, setCount] = useState( null)


  console.log('dog222', dog);
  const [dogs, setDogs] = useContext(DogsContext)

  //   useEffect(()=>{
  //   // setDogs(replace(dogs, id))

  // },[count])

  function replace(object, searchID) {
    var replacedObject = object
    for (var i = 0; i < replacedObject.length; i++) {
      if (replacedObject[i].id != searchID) continue
      replacedObject[i].likes++
      return replacedObject
    }
  }

  const handleIncrement = () => {
    setCount((count) => count + 1)
    // console.log('replace(context, id)', replace(context, id));
    setDogs(replace(dogs, id))
    // console.log('context', context);
  }

  return (
    <Grid   
    onClick={handleIncrement}
    // onClick={setCount(11)}
    // onClick={setCount((prevCount) => prevCount + 1)}
    
    item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader subheader={breed} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* { console.log('dogs', dogs[id].likes)}  */}
            likes={count}
            {/* likes={dogs[id].likes} */}
          </Typography>

          {/* <Typography variant="body2" color="text.secondary">
             likes={likes}
           </Typography> */}
        </CardContent>

        {/* {console.log("dogs_RightListItem", dogs)}
      {console.log("id RightListItem", id)}
      {console.log("replace(dogs, id))", replace(dogs, id))} */}

        <FetchImg dog={breed} />
      </Card>
    </Grid>
  )
}
