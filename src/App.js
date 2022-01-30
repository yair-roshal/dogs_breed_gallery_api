import "./App.css"
import { Home } from "./components"
import { useEffect, useState } from "react"
import { getDogs } from "./utils/api"
//  import {colors} from "@mui/material"
import { DogsContext } from "./contexts/Context"

// import { ThemeContext } from "./contexts/ThemeContext"
// import { ThemeContextExample } from "./components"

export function App() {

  // const [colors, setColors] = useState({
  //   accent1: "blue",
  //   accent2: "red",
  // })

  const [dogs, setDogs] = useState(
    [
      { id: 0, breed: "newfoundland", likes: 0 },
      { id: 1, breed: "hound", likes: 0 },
      { id: 2, breed: "labrador", likes: 0 },
    ]
    )

  const [loading, setLoading] = useState(true)
  

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
        // setContext(toObject(randomArray(Object.keys(res))))
        setDogs(toObject(randomArray(Object.keys(res))))
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    // <ThemeContext.Provider value={[colors, setColors]}>
    //   <div> 
    //     <ThemeContextExample />
    //   </div>
    // </ThemeContext.Provider>

    <DogsContext.Provider value={[dogs, setDogs ] } >
      {console.log('dogs', dogs)}
      <div className="App">
         <Home loading={loading}  />
      </div>
    </DogsContext.Provider>

 




  )
}
