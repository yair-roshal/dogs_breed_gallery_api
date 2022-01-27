import { useEffect, useState } from "react"
import { FetchData } from "../hooks"
import { FetchImg } from "../hooks"

// import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

export const RightListItem = ({ dog }) => {
  const { breed, likes } = dog
  return (
    <Grid item xs={3}>
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
