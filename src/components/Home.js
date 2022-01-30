import { useEffect, useState, useContext } from "react"
import { RightList } from "./RightList"
import { LeftList } from "./LeftList"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"

//  import { MyContext } from "../contexts/Context"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export function Home({ loading,dogs }) {
  // const { context, setContext } = useContext(MyContext)
  // console.log("dogs_context_home", context)
  // const [context1, setContext1] = useState(MyContext)
  // const [context2, setContext2] = useState(MyContext)

  // useEffect(() => {
  //   // setContext1(context)
  //   // setContext2(context)
    
  // }, [context])


  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <Box sx={{ width: "100%" }}>
          {/* {console.log("context_Home", context)} */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <LeftList
                //  loading={loading} dogsObj={dogs}
                  />
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <RightList 
                // loading={loading} dogsObj={dogs} 
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}
