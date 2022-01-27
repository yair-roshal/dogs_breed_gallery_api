import { useEffect, useState, useMemo } from "react"
import axios from "axios"

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  const [dogsArr, setDogsArr] = useState([])

  const URL = "https://dog.ceo/api/breeds/list/all"

  useEffect(() => {
    axios
      .get(URL)
      .then((Response) => {
        setLoading(true)
        const res = Response.data.message
        return res
      })
      .then((res) => {
        setDogsArr(Object.keys(res))
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  //   async function fetchImg(dog) {
  //     const URL = `https://dog.ceo/api/breed/${dog}/images/random`
  //     let res = await axios.get(URL);
  //     let data = res.data;
  //     return data.message
  //   }

  //   function fetchImg(dog) {
  //   const URL = `https://dog.ceo/api/breed/${dog}/images/random`
  //   return  fetch(URL)
  //   .then((resp) => resp.json())
  //   .then(function(data) {
  //     return data.message
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }

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
  console.log("dogsObj", dogsObj)

  return { loading, dogsObj }
}
