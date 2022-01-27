import { useEffect, useState } from "react"
import { FetchData } from "../hooks"
import { FetchImg } from "../hooks"
import { RightListItem } from "./RightListItem"

// import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export const RightList = ({ loading, dogsObj }) => {
  function HandleCountLikes() {}

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Grid container spacing={2}>
            {dogsObj.map(({ breed, likes }, index) => (
              <Grid key={index} item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader title={breed} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      likes={likes}
                    </Typography>
                  </CardContent>

                  <FetchImg onClick={HandleCountLikes} dog={breed} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  )
}