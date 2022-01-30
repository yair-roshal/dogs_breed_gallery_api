 import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/system"
import CardActions from "@mui/material/CardActions"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from "@mui/material/IconButton"

const MyBox = styled("Box")({
  padding: 2,
  cursor: "pointer",
  "-webkit-touch-callout": "none" /* iOS Safari */,
  "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
  "-khtml-user-select": "none" /* Konqueror */,
  "-moz-user-select": "none" /* Firefox */,
  "-ms-user-select": "none" /* Internet Explorer/Edge */,
  "user-select": "none",
})

export const LeftListItem = ({ dog }) => {
  const { breed, count, likes } = dog

  return (
    <MyBox
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "5px 0px",
      }}
    >
      <ListItem disablePadding>
        <Card
          sx={{
            width: "200%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardHeader
            title={breed}
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
            }}
          />

          <CardContent>
            <Typography variant="body1" color="text.secondary">
              count={count}
            </Typography>
 
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                sx={{ color: likes > 0 ? "red" : "" }}
              >
                <FavoriteIcon /> <span>{likes} </span>
              </IconButton>
            </CardActions>


          </CardContent>
        </Card>
      </ListItem>

      <Divider />
    </MyBox>
  )
}
