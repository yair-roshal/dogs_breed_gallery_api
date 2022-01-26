import React, { useEffect, useState } from "react"
import axios from "axios"
// import _ from "underscore"
import FetchImg from "./FetchImg"

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [dogsArr, setDogsArr] = useState([])

  const URL = "https://dog.ceo/api/breeds/list/all"

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data: response } = await axios.get(URL)
          setData(response)
          setDogsArr(Object.keys(data.message))

      } catch (error) {
        console.error(error.message)
      }
      setLoading(false)
      // data.message !=null &&  data.message !="undefined" &&
      //  setDogsArr(Object.keys(data.message))
      // const dogsArr=Object.keys(data.message)
    }

    fetchData()
  }, [])

  //  function objToArr(data) {
  //   const dogsArr=Object.keys(data.message)
  //  }

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {dogsArr.map((dog) => (
            <div>
              <p>{dog}</p>
              <FetchImg dog={dog}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FetchData
