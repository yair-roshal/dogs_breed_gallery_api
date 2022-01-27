import { useEffect, useState,useContext,useRef } from "react"
import { FetchData } from "../hooks"
import { FetchImg } from "../hooks"

// import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid" 
import {Update} from "@mui/icons-material"
import { Context } from "../contexts/Context";

export const RightListItem = ({ dog }) => {
  const [context, setContext] = useContext(Context);
  
  const { id,breed, likes } = dog

  const [count, setCount] = useState(0)

  const elementRef = useRef(0)

  // useEffect(() => {
  //   setDogs(dogs)
  //  }, [dogs])

  //  function updateData(dogs) {
  //   setDogs(dogs)
  // }

//   function HandleCountLikes(id) {
// UpdateLikes(id) 
//  }

// function handleCardLike(card) {
//   const isLiked = card.likes.some(i => i._id === currentUser._id);
//   api.changeLikeCardStatus(card.cardId, !isLiked)
//     .then((newCard) => {
//       const newCards = cards.map((c) => c._id === card.cardId ? newCard : c);
//       setCards(newCards);
//     })
//     .catch((err)=>{
//       console.log(`Ошибка лайка: ${err}`);
//     });
// }

  return (
    <Grid  
     ref={elementRef}
    // onClick={HandleCountLikes(id)}
    // onClick={() => setContext("New123")}
    item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader subheader={breed} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            likes={likes}
          </Typography>
        </CardContent>
        <FetchImg dog={breed} />
      </Card>
    </Grid>
  )
}
