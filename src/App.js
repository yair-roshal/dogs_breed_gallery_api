import "./App.css"
import { Home } from "./components"
import { useEffect, useState, useContext } from "react"
import { FetchData } from "./hooks"
import { MyContext } from "./contexts/Context"
import { getDogs } from "./utils/api"

export function App() {
  // const { loading, dogsObj } = FetchData([])
   // const dogs_context = useContext(MyContext);
  const [loading, setLoading] = useState(true)
  const [dogsArr, setDogsArr] = useState([])
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
        // rv.image = fetchImg(arr[i])
        arrOfObj.push(rv)
      }

    return arrOfObj
  }
   
  useEffect(() => {
    getDogs()
      .then((res) => {
        // setDogsArr(Object.keys(res))
        setContext(toObject(randomArray(Object.keys(res)))) 
        setLoading(false)
      }) 
      .catch((error) => console.log(error))
  }, [])

 

  return (
    <MyContext.Provider value={context}>
 
      {/* <MyContext.Provider value={[context, setContext]}> */}
      <div className="App">
         {/* <Home loading={loading} dogsObj={dogsObj} /> */}
                  <Home loading={loading}   />

      </div>
    </MyContext.Provider>
  )
}
