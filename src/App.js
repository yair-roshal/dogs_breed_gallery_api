import "./App.css"
import { Home } from "./components"
import { useEffect, useState } from "react"
import { getDogs } from "./utils/api"
//  import {colors} from "@mui/material"
import { MyContext } from "./contexts/Context"

import { ThemeContext } from "./contexts/ThemeContext"
import { ThemeContextExample } from "./components"

export function App() {
  const [colors, setColors] = useState({
    accent1: "blue",
    accent2: "red",
  })

  const [loading, setLoading] = useState(true)
  const [context, setContext] = useState(MyContext)

  function random(min, max) {
    return Math.round(min + Math.random() * (max - min))
  }

  function randomArray(Arr) {
    let randomArr = []
    for (let i = 0; i < 80; i++) {
      randomArr.push(Arr[random(0, Arr.length)])
    }
    return randomArr
  }

  function toObject(arr) {
    let arrOfObj = []
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) {
        let rv = {}
        rv.id = i
        rv.breed = arr[i]
        rv.likes = 0
        arrOfObj.push(rv)
      }

    return arrOfObj
  }

  useEffect(() => {
    getDogs()
      .then((res) => {
        setContext(toObject(randomArray(Object.keys(res))))
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <ThemeContext.Provider value={[colors, setColors]}>
      <div>
        {/* <input
          value={colors.accent1}
          type="color"
          onChange={(e) => setColors({ accent1: e.target.value })}
        />
        <input
          value={colors.accent2}
          type="color"
          onChange={(e) => setColors({ accent2: e.target.value })}
        /> */}

        <ThemeContextExample />
      </div>
    </ThemeContext.Provider>

    // <MyContext.Provider value={{ context, setContext }}>
    //   <div className="App">
    //     {/* { console.log('context_Provider', context)} */}
    //     <Home loading={loading} dogs={context} />
    //   </div>
    // </MyContext.Provider>
  )
}
