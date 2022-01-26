import React, { useEffect, useState } from "react"
import axios from "axios"
// import _ from "underscore"
import FetchImg from "./FetchImg"

export const FetchData = () => {
  const [loading, setLoading] = useState(true)
  // const [data, setData] = useState([])
  const [dogsArr, setDogsArr] = useState([])

  const URL = "https://dog.ceo/api/breeds/list/all"

  useEffect(() => {
    axios
      .get(URL)
      .then((Response) => {
              setLoading(true) 
        // setData(Response.data)
        console.log("Response.data", Response.data)
        console.log("Response.data message", Response.data.message)
        const res= Response.data.message
        return res
       })
    
      .then((res) => {

         setDogsArr(Object.keys(res))
        //  setDogsArr(Object.keys(data.message))
        // console.log("dogsArr. ", dogsArr)
        setLoading(false) 

      })
      .catch((error) => console.log(error))
  }, [])

  // dogsArr && console.log("dogsArr", dogsArr)

  // useEffect(() => {
 
  //   const fetchDataDogs = async () => {
  //     setLoading(true)
  //     try {
  //       const { data: response } = await axios.get(URL)
  //         setData(response) 
  //         console.log("response",response)
  //         console.log("data",data)

  //       //   if (data){
  //       //     setDogsArr(Object.keys(data.message)) 
  //       // }
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //     setLoading(false)
  //     // data.message !=null &&  data.message !="undefined" &&
  //     //  setDogsArr(Object.keys(data.message))
  //     // const dogsArr=Object.keys(data.message)
  //   }

  //   fetchDataDogs()

  // }, [])

  // console.log("data2",data)

  // function objToArr(data) {
  //   const dogsArr = Object.keys(data.message)
  // }

  // const dogsArr = Object.keys(data.message)

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {dogsArr.map((dog,index) => (
            <div key={index}>
              <p>{dog}</p>
              {/* <FetchImg dog={dog}/> */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FetchData
