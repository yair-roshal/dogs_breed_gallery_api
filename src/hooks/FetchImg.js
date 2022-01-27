import { useEffect, useState } from "react"
import axios from "axios"
 
export const FetchImg = ({ dog }) => {
  const [loading, setLoading] = useState(true)
  const [dataImg, setDataImg] = useState([])

  const URL = `https://dog.ceo/api/breed/${dog}/images/random`

  useEffect(() => {
    axios
      .get(URL)
      .then((Response) => {
        setLoading(true)
        const res = Response.data.message
        return res
      })
      .then((res) => {
         setDataImg(res)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])
 
  return <div className="imgDog">
    <img  src={dataImg}></img>
  </div>
   
}
