import { useEffect, useState } from "react"
import { getDogs } from "../utils/api"
import { useLocalStorage } from "../hooks"
import { MyContext } from "../contexts/Context"

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  const [dogsArr, setDogsArr] = useState([])
  const [context, setContext] = useState(MyContext)

  // const [dogLS, setDogLS] = useLocalStorage("allDogs5", [ 1])
  // const [allDogs] = useLocalStorage('allDogs')
  // const [username, setUsername] = useLocalStorage("username", "John")

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
        setDogsArr(Object.keys(res))
        setContext(toObject(randomArray(Object.keys(res)))) 
        setLoading(false)
      }) 
      .catch((error) => console.log(error))
  }, [])

  const dogsArrRandom = randomArray(dogsArr) 
  const dogsObj = toObject(dogsArrRandom)

  console.log('context', context);
  return { loading, dogsObj }
}
