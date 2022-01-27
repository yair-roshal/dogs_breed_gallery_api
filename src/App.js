import "./App.css"
import { RightList } from "./components"
import { LeftList } from "./components"
import { Home } from "./components"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { useEffect, useState, useRef } from "react" 
import { FetchData } from "./hooks"
import { Context } from "./contexts/Context";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

function App() {
  const { loading, dogsObj } = FetchData([])
  const [context, setContext] = useState("default context value");

  console.log("dogsObj", dogsObj)

  return (
    <Context.Provider value={[context, setContext]}>

    <div className="App">

      <Home/>
{/* 
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
      )} */}
    </div>
    </Context.Provider>

  )
}

export default App
