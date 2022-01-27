import { useEffect, useState, useContext } from "react"
import { RightList } from "./RightList"
import { LeftList } from "./LeftList"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"

import { FetchData } from "../hooks"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export function Home({loading,dogsObj}) {
   const [context, setContext] = useState("1233333")

  console.log("dogsObj333", dogsObj)

 
//   const DATA = [
//     {
//       id: '1',
//       title: 'The Road to React',
//       price: 19.99,
//     },
//     {
//       id: '2',
//       title: 'The Road to GraphQL',
//       price: 29.99,
//     },
//   ];

// useEffect(()=>{
//   // setContext(dogsObj) 
//   setContext(DATA) 
// },[])


  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <LeftList loading={loading} dogsObj={dogsObj} />
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <RightList loading={loading} dogsObj={dogsObj} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}
