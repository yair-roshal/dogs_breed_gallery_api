import React, { useEffect, useState } from "react"
import axios from "axios"
// import _ from "underscore"

export const FetchImg = ({dog}) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
//  console.log('dog', dog);
const URL = `https://dog.ceo/api/breed/${dog}/images/random`
console.log('URL', URL);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data: response } = await axios.get(URL)
        setData(response)
        console.log('data222', data); 
      } catch (error) {
        console.error(error.message)
      }
      setLoading(false)
      
    }

    fetchData()
  }, [URL,dog])

 
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {data}
        </div>
      )}
    </div>
  )
}

export default FetchImg
