import { useEffect, useState   } from "react"
import { getDogs } from "../utils/api"
import { useLocalStorage } from '../hooks'

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  const [dogsArr, setDogsArr] = useState([])

  const [dogLS, setDogLS] = useLocalStorage("allDogs5", [ 1])
    // const [id] = useLocalStorage('id' )
  // const [allDogs] = useLocalStorage('allDogs')
// console.log('allDogs5555', allDogs);

  const [username, setUsername] = useLocalStorage("username", "John")
  // const [likesLS, setLikesLS] = useLocalStorage("likes", "5")
  // const [dogLS, setDogLS] = useLocalStorage("allDogs", dog)

  // const [id] = useLocalStorage('id' )
  // const [likes] = useLocalStorage('likes')


  useEffect(() => {
    getDogs()
      .then((res) => {
        setDogsArr(Object.keys(res)) 
        setLoading(false)
      })
      .then(( ) => {
        setDogLS(dogsObj) 
      })

      .catch((error) => console.log(error))
  }, [])

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

  const dogsArrRandom = randomArray(dogsArr)

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

  const dogsObj = toObject(dogsArrRandom)
  // console.log("dogsObj", dogsObj)

  return { loading, dogsObj }
}
