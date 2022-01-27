import "./App.css"
import { Home } from "./components"
import { useEffect, useState   } from "react"
import { FetchData } from "./hooks"
import { Context } from "./contexts/Context"

export function App() {
  const { loading, dogsObj } = FetchData([])
  const [context, setContext] = useState([])
 
  const DATA2 = [
    {
      id: "1",
      title: "The Road to React",
      price: 19.99,
    },
    {
      id: "2",
      title: "The Road to GraphQL",
      price: 29.99,
    },
  ]

  useEffect(() => {
 
    console.log('dogsObj222', dogsObj);
    setContext(dogsObj)
    //  setContext(DATA2)
    // debugger;
  }, [])

  // console.log("dogsObj", dogsObj)
  // console.log("context111", context)

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        {/* <Home /> */}
        <Home loading={loading} dogsObj={dogsObj} />
      </div>
    </Context.Provider>
  )
}
