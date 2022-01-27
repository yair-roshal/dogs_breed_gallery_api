import { useEffect, useState,useContext,useRef } from "react"
 import { FetchImg } from "../hooks" 
 import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid" 
 import { Context } from "../contexts/Context";

export const RightListItem = ({ dog }) => {
  const [context, setContext] = useContext(Context);
  
  const { id,breed, likes } = dog

  const [count, setCount] = useState(0)
 
  // const elementRef = useRef(0)

  // useEffect(() => {
  //   setDogs(dogs)
  //  }, [dogs])

  //  function updateData(dogs) {
  //   setDogs(dogs)
  // }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

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
    //  ref={elementRef}
    onClick={handleIncrement}
    // onClick={HandleCountLikes(id)}
    // onClick={() => setContext("New123")}
    item xs={3}>
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
