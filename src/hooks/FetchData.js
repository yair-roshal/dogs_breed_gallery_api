import { useEffect, useState   } from "react"
import { getDogs } from "../utils/api"

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  const [dogsArr, setDogsArr] = useState([])

  useEffect(() => {
    getDogs()
      .then((res) => {
        setDogsArr(Object.keys(res))
        setLoading(false)
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
