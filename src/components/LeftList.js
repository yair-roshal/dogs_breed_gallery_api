import React, { useEffect, useState } from "react"
import axios from "axios"
// import FetchImg from "./FetchImg"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

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

import { FetchData } from "../hooks"

export const LeftList = ({ loading, dogsObj }) => {
  const [dogsArr, setDogsArr] = useState([])

  const URL = "https://dog.ceo/api/breeds/list/all"

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <List>
            {dogsObj.map(({ breed, likes }, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
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
                    <CardHeader title={breed} />
                    <CardContent>
                      <Typography variant="body1" color="text.secondary">
                        counts={likes}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        likes={likes}
                      </Typography>
                    </CardContent>
                  </Card>
                </ListItem>

                <Divider />
              </Box>
            ))}
          </List>
        </div>
      )}
    </div>
  )
}

export default LeftList
